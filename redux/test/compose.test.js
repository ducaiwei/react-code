function add1(str) {
    return '1' + str;
}
function add2(str) {
    return '2' + str;
}
function add3(str) {
    return '3' + str;
}
/**
 * compose是把所有的参数函数组合成一个函数  依次把前一个函数的执行结果当做参数传递给后一个函数
 * @param {*} add3 
 * @param {*} add2 
 * @param {*} add1 
 */
// function compose(add3, add2, add1) {
//     return add3(add2(add1('hello')))
// }


const compose = (...fns) => {
    return fns.reduce((a, b) => function(...args) {
        return a(b(args));
    })
}
const resultFn = compose(add3, add2, add1);
console.log(resultFn('hello'));