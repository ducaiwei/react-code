import { Compose } from './types';
/**
 * compose是把所有的参数函数组合成一个函数  依次把前一个函数的执行结果当做参数传递给后一个函数
 */
const compose: Compose =(...fns: Array<Function>) => {
    return fns.reduce((a,b) => (...args) => a(b(args)))
}
export default compose;
