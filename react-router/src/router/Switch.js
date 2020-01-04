import React, { useContext } from 'react';
import RouterContext from './Context';
import { pathToRegexp } from 'path-to-regexp';

/**
 * switch负责子组件进行匹配 只会渲染第一个匹配上的组件
 * useContext 是拿到上下文对象的第三种方式
 * static contextType(class组件)、 Consumer(函数组件)、ReactHooks useContext
 */
export default (props) => {
    const context = useContext(RouterContext);
    const children = Array.isArray(props.children) ? props.children : [props.children];
    const pathname = context.location.pathname;
    // 迭代所有的子组件  当子组件的path和当前location.pathname匹配成功 返回当前子组件
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        // exact默认是false 非精确匹配
        const { path = '/', exact = false } = child.props;
        let params = [];
        const regexp = pathToRegexp(path, params, { end: exact });
        let result = pathname.match(regexp);
        if (result) {
            return child;
        }
    }
    return null;
}