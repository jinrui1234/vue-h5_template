/*
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-14 15:28:10
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-14 15:49:49
 * @FilePath: /vue3-ts-h5-template/src/utils/set-page-title.ts
 * @Description: 设置页面标题
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
 */
export function setPageTitle(routeTitle?: string) {
  console.log(routeTitle, 999);

  window.document.title = routeTitle
    ? `${routeTitle}`
    : import.meta.env.VITE_APP_DEFAULT_TITLE;
}
