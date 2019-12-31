import React from 'react';
import Context from './Context';
import { pathToRegexp } from 'path-to-regexp';

/**
 * 当一个组件通过route渲染出来
 * 此组件的props会有 location history match 三个属性
 */
class Route extends React.Component {
    static contextType = Context;
    render() {
        // RouteComponent 变量别名
        let { path = '/', component: RouteComponent, exact = false } = this.props
        path = typeof path === 'string' ? path : path.pathname;
        // 根据props中的path生成正则
        let regexp = pathToRegexp(path, [], { end: true });
        let pathname = this.context.location.pathname;
        let result = pathname.match(regexp);
        let routeProps = {
            history: this.context.history,
            location: this.context.location
        }
        if (result) {
            return <RouteComponent {...routeProps}/>
        }
        return null;
    }
}
export default Route;