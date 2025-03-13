import service from './index';

// 登录
export function loginAjax(params: any) {
  return service({
    method: 'post',
    url: `/blue_auth/api_service/auth/v1/auth/account/login`,
    data: params
  });
}

// 注销
export function loginOutAjax() {
  return service({
    method: 'post',
    url: `/blue_auth/api_service/auth/v1/auth/account/logout`
  });
}
