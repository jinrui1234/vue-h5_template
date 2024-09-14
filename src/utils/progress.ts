/*
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-14 15:34:36
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-14 15:42:51
 * @FilePath: /vue3-ts-h5-template/src/utils/progress.ts
 * @Description:
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
 */
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
  // 动画方式
  easing: 'ease',
  // 递增进度条的速度
  speed: 500,
  // 是否显示加载ico
  showSpinner: false,
  // 自动递增间隔
  trickleSpeed: 200,
  // 初始化时的最小百分比
  minimum: 0.3,
  // 加载条的父元素
  parent: 'body'
});

export default NProgress;
