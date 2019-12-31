import React from 'react';
import Context from './Context';

class HashRouter extends React.Component {
    state = {
        location: { pathname: window.location.hash.slice(1) }
    }
    componentDidMount() {
        window.addEventListener('hashchange', (event) => {
            this.setState({
                location: {
                    ...this.state.location, 
                    pathname: window.location.hash.slice(1) || '/',
                    state: this.locationState
                }
            })
        }, true);
        window.location.hash = window.location.hash || '/';
    }
    render() {
        const _that = this;
        let history = {
            location: this.state.location,
            push(to) {
                if (history.prompt) { // 跳转前弹窗提示
                    let target = typeof to === 'string' ? { pathname: to } : to;
                    let result = window.confirm(history.prompt(target));
                    if (!result) return;
                }
                if (typeof to === 'object') { // {pathname,state}
                    let { pathname, state } = to;
                    _that.locationState = state;
                    window.location.hash = pathname;
                } else {
                    window.location.hash = to;
                }
            },
            block(prompt) { // 路由切换时  是否弹窗提示
                history.prompt = prompt;
            },
            unblock() {
                history.prompt = null;
            }
        }
        let routerValue = {
            location: this.state.location,
            history
        }
        // route渲染的组件有location history match三个props属性
        return (
            <Context.Provider value={routerValue}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export default HashRouter;