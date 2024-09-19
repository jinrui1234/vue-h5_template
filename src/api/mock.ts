/*
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-18 17:03:02
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-19 17:00:11
 * @FilePath: /vue3-ts-h5-template/src/api/mock.ts
 * @Description:
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
 */
import Http from '../utils/http/index';

export const getLists = () => {
  return Http.request({
    url: `/list/get`,
    method: 'get'
  });
};
