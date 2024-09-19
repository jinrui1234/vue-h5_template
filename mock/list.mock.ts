/*
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-18 16:15:29
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-19 19:32:09
 * @FilePath: /vue3-ts-h5-template/mock/list.mock.ts
 * @Description:
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
 */
import { defineMock } from 'vite-plugin-mock-dev-server';
import Mock from 'mockjs';

export default defineMock([
  {
    url: '/dev-api/list/get',
    delay: 1000,
    body: {
      code: 0,
      message: 'OK',
      data: Mock.mock({
        'list|10': [
          {
            'id|+1': 1,
            name: '@cname',
            'age|1-100': 1,
            email: '@email',
            address: '@county(true)',
            phone: /^1[34578]\d{9}$/
          }
        ],
        total: 10
      })
    }
  }
]);
