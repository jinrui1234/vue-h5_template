/*
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-14 20:08:14
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-14 20:08:18
 * @FilePath: /vue3-ts-h5-template/src/utils/index.ts
 * @Description: 工具类
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
 */
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

/**
 * 节流
 * @param {Function} fn 事件
 * @param {Number} limit 触发间隔
 */
export const throttle = <F extends TFunc>(
  fn: F,
  limit = 200
): IThrottleFunction<F> => {
  let wait = false;
  // eslint-disable-next-line func-names
  return function (this: void, ...args: Parameters<F>) {
    if (wait === false) {
      wait = true;
      setTimeout(() => {
        wait = false;
      }, limit);
      return fn.apply(this, args);
    }
    return null;
  };
};
/**
 * 防抖
 * @param {Function} fn 事件
 * @param {Number} wait 触发间隔
 * @param {Number} immediate 是否立即触发一次
 */
export const debounce = <F extends TFunc>(
  fn: F,
  wait: number,
  immediate = false
): IDebounceFunction<F> => {
  let timeout: ReturnType<typeof setTimeout>;
  const debounced = function (
    this: ThisParameterType<F>,
    ...args: Parameters<F>
  ) {
    const later = () => {
      timeout;
      if (immediate !== true) {
        fn.apply(this, args);
      }
    };
    clearTimeout(timeout);
    if (immediate === true && timeout === undefined) {
      fn.apply(this, args);
    }
    timeout = setTimeout(later, wait);
  };
  debounced.cancel = () => {
    clearTimeout(timeout);
  };
  return debounced;
};
