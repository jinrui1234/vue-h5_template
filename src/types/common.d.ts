/*
 * @Author: changjun anson1992@163.com
 * @Date: 2023-11-25 13:53:56
 * @LastEditors: changjun anson1992@163.com
 * @LastEditTime: 2023-11-27 15:59:39
 * @FilePath: /I-BRAIN-SCREEN-TEMPLATE/src/types/common.d.ts
 * @Description:
 */
/**
 * @description Axios Request返回体
 * @param {number} code 错误码
 * @param {string} message 提示信息
 * @param {any} data 返回数据
 */
export type THttpResponse<T = TDict> = {
	code: number
	message: string
	data: T
}
/**
 * Data 列表返回体
 */
export type THttpDataResponse<T> = {
	records: Array<T>
	total: number
	size: number
	current: number
}

export type THttpDataResponseByCode<T> = {
	rows: never[]
	code: number
	records: Array<T>
	total: number
	size: number
	current: number
}
/**
 * @description 节流
 * @param {function} fn 函数
 */
export interface IThrottleFunction<F extends TFunc> {
	(this: ThisParameterType<F>, ...args: Parameters<F>): void
}
/**
 * @description 防抖
 * @param {function} fn 函数
 * @param {function} cancel 取消回调
 */
export interface IDebounceFunction<F extends TFunc> {
	(this: ThisParameterType<F>, ...args: Parameters<F>): void
	cancel: () => void
}
