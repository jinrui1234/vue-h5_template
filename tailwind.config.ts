/*
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-14 16:10:24
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-14 16:26:03
 * @FilePath: /vue3-ts-h5-template/tailwind.config.ts
 * @Description: tailwind.config.js 配置文件
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
 */
/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,ts,vue}', './index.html'],
  theme: {
    extend: {}
  },
  plugins: []
} satisfies Config;
