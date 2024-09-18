/*
 * @Author: 17714331167 changjun19920716@gmail.com
 * @Date: 2024-09-14 18:35:31
 * @LastEditors: 17714331167 changjun19920716@gmail.com
 * @LastEditTime: 2024-09-14 18:35:45
 * @FilePath: /vue3-ts-h5-template/src/types/declare.d.ts
 * @Description:
 * Copyright (c) 2024 by ${17714331167}, All Rights Reserved.
 */
/**
 * @description 任意类型
 */
declare type TAny = any;

/**
 * @description 泛型对象 默认any
 */
declare type TDict<T = TAny> = {
  [key: string]: T;
};

/**
 * @description 泛型函数 默认any
 */
declare type TFunc<T = TAny> = (...args: Array<TAny>) => T;
