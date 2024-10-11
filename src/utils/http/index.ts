/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-04-14 20:28:41
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-10-11 20:02:21
 * @FilePath: /vue3-ts-h5-template/src/utils/http/index.ts
 * @Description: 基于axios的接口请求实现类
 */
import Axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  AxiosError
} from 'axios';
import Qs from 'qs';
import { type RequestOptions, type THttpResponse } from './types';
import { ContentTypeEnum, ResultEnum } from './http-enum';
import { checkStatus } from './check-status';
import { showDialog, showLoadingToast, closeToast } from 'vant';
// 是否为本地开发环境
const isDev = import.meta.env.MODE === 'development';
// 请求队列
const pendingRequest = new Map();
// 生成请求Key
const generateReqKey = (config: AxiosRequestConfig) => {
  // 根据请求方案、请求地址、请求包体 判断是否为重复请求
  const { url, method, params, data } = config;
  return [method, url, Qs.stringify(params), Qs.stringify(data)].join('&');
};
// 将当前请求加入请求队列
const addPendingRequest = (config: AxiosRequestConfig) => {
  const requestKey = generateReqKey(config);
  config.cancelToken =
    config.cancelToken ||
    new Axios.CancelToken(cancel => {
      if (!pendingRequest.has(requestKey)) {
        pendingRequest.set(requestKey, cancel);
      }
    });
};
// 检查队列中是否存在重复请求，如果存在则取消已发的请求
const removePendingRequest = (config: AxiosRequestConfig) => {
  const requestKey = generateReqKey(config);
  if (pendingRequest.has(requestKey)) {
    const cancelToken = pendingRequest.get(requestKey);
    cancelToken(requestKey);
    pendingRequest.delete(requestKey);
  }
};
const handleError = (err: AxiosError) => {
  const _code = err.code ? parseInt(err.code) : 500;
  // 开发环境打印错误信息
  if (isDev) {
    console.error(`===status:${_code};===errorMessageText:${err?.message}`);
  }
  showDialog({
    title: '错误',
    message: err?.message || '网络请求失败！'
  });
  checkStatus(_code, err?.message);
};

class IAxios {
  private readonly options: RequestOptions;
  private instance: AxiosInstance | undefined;

  constructor(options: RequestOptions) {
    this.options = options;
  }

  request<TAny>(
    configs: AxiosRequestConfig,
    options?: RequestOptions
  ): Promise<TAny> {
    this.instance = Axios.create();
    const _conf: AxiosRequestConfig = JSON.parse(JSON.stringify(configs));
    const _opts: RequestOptions = Object.assign({}, this.options, options);
    const {
      contentType,
      isShowErrorMessage,
      errorMessageText,
      isTransformRequestResult,
      isShowServerErrorMessage,
      isTimeout,
      timeoutNumber,
      ignorePendingRequest,
      ignoreLoading
    } = _opts;
    if (!ignoreLoading) {
      showLoadingToast({
        message: '加载中...',
        forbidClick: true
      });
    }
    if (contentType) {
      _conf.headers = {
        ..._conf.headers,
        'Content-Type': contentType
      };
    }
    this.instance.defaults.baseURL = import.meta.env.VITE_APP_BASE_API;
    // 是否需要设置超时时长
    if (isTimeout) {
      this.instance.defaults.timeout = timeoutNumber;
    }
    // request拦截器
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig | any) => {
        // 检查是否存在重复请求，若存在则删除
        if (ignorePendingRequest) {
          removePendingRequest(config);
          addPendingRequest(config);
        }
        return config;
      }
    );
    // response拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse<TAny | any, THttpResponse>) => {
        const _data = response.data;
        if (ignorePendingRequest) {
          removePendingRequest(response.config);
        }
        // 不需要格式化接口出参
        if (!isTransformRequestResult) {
          if (response.status === 200) {
            return Promise.resolve(_data);
          } else {
            return Promise.reject(_data);
          }
        }
        // 需要格式化出参
        // 业务状态码
        const _code = _data?.code;
        switch (_code) {
          case ResultEnum.SUCCESS:
            if (!ignoreLoading) {
              closeToast();
            }
            return Promise.resolve(_data?.data);
          default:
            // 是否统一处理业务异常
            if (isShowServerErrorMessage) {
              handleError({
                code: _data?.code?.toString(),
                config: response.config,
                isAxiosError: false,
                message: errorMessageText || _data?.message,
                name: '',
                response: response,
                toJSON: () => {
                  return {};
                }
              });
              return Promise.reject(_data?.data);
            }
            if (!ignoreLoading) {
              closeToast();
            }
            return Promise.resolve(_data);
        }
      },
      (err: AxiosError) => {
        if (ignorePendingRequest) {
          removePendingRequest(err.config || {});
        }
        if (Axios.isCancel(err)) {
          console.log('已取消的重复请求：' + err.message);
        }
        // 是否统一处理http接口请求异常
        if (isShowErrorMessage) {
          const { data, statusText } = err.response as AxiosResponse;

          handleError({
            ...err,
            code: err.response?.status.toString(),
            message: errorMessageText || data?.message || statusText
          });
        }
        if (!ignoreLoading) {
          closeToast();
        }
        return Promise.reject(err.response);
      }
    );
    // 接口请求
    return this.instance.request(_conf);
  }
}

/**
 * 请求类接口实现
 */
const Http = new IAxios({
  contentType: ContentTypeEnum.JSON,
  errorMessageText: '',
  formatDate: false,
  ignoreToken: false,
  isParseToJson: true,
  isShowErrorMessage: true,
  isShowServerErrorMessage: true,
  isTimeout: true,
  isTransformRequestResult: true,
  joinParamsToUrl: false,
  serverErrorMessage: '',
  timeoutNumber: 500000,
  ignorePendingRequest: true,
  ignoreLoading: false
});
export default Http;
