/*
 * @Author: Anson
 * @Date: 2022-04-02 16:54:26
 * @LastEditTime: 2024-09-18 17:16:16
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue3-ts-h5-template/src/utils/http/types.ts
 */
/**
 * 请求服务配置参数
 */
export interface RequestOptions {
  // 请求参数拼接到url
  joinParamsToUrl?: boolean;
  // 是否格式化请求参数时间;
  formatDate?: boolean;
  // 是否格式化出参
  isTransformRequestResult?: boolean;
  // 请求方式
  contentType?: string;
  // 是否解析成JSON
  isParseToJson?: boolean;
  // 是否统一处理Http异常信息
  isShowErrorMessage?: boolean;
  // http错误信息的文本
  errorMessageText?: string;
  // 是否统一处理业务异常信息
  isShowServerErrorMessage?: boolean;
  // 业务错误信息的文本
  serverErrorMessage?: string;
  // 是否设置请求超时
  isTimeout?: boolean;
  // 请求超时时长（毫秒）
  timeoutNumber?: number;
  // 是否忽略token
  ignoreToken?: boolean;
  // 是否忽略loading
  ignoreLoading?: boolean;
  // 是否忽略重复请求
  ignorePendingRequest?: boolean;
}

/**
 * 服务出参参数
 */
export interface ResultParams<T = any> {
  code: number;
  data?: T;
  message: string;
}

export interface DataParams<T = any> {
  records?: T;
  total?: number;
  size?: number;
  current?: number;
}

/**
 * @description Axios Request返回体
 * @param {number} code 错误码
 * @param {string} message 提示信息
 * @param {any} data 返回数据
 */
export type THttpResponse<T = TDict> = {
  code: number;
  message: string;
  data: T;
};
/**
 * Data 列表返回体
 */
export type THttpDataResponse<T> = {
  records: Array<T>;
  total: number;
  size: number;
  current: number;
};

export type THttpDataResponseByCode<T> = {
  rows: never[];
  code: number;
  records: Array<T>;
  total: number;
  size: number;
  current: number;
};
/**
 * @description 节流
 * @param {function} fn 函数
 */
export interface IThrottleFunction<F extends TFunc> {
  (this: ThisParameterType<F>, ...args: Parameters<F>): void;
}
/**
 * @description 防抖
 * @param {function} fn 函数
 * @param {function} cancel 取消回调
 */
export interface IDebounceFunction<F extends TFunc> {
  (this: ThisParameterType<F>, ...args: Parameters<F>): void;
  cancel: () => void;
}
