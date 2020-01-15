import compose from './compose';
import { Store, Reducer, Dispatch, MiddlewareApi } from './types';
/**
 * 1、如果没有中间件的运行,redux的工作流程是action->reducer,相当于是同步操作，因为dispatch派发action后
 * 直接调用了reducer函数
 * 2、但是某些复杂的业务逻辑中, 这种方式并不能很好的解决问题。引入中间件可以解决同步的问题
 * 3、中间件的机制可以让我们改变数据流，实现异步action,action过滤，日志输出，异常报告等
 *
 * @param middlewares
 */

const applyMiddleware = (...middlewares: Array<Function>) => {
  return (createStore: Function) => {
    return (reducer: Reducer) => {
      const store: Store = createStore(reducer);
      let dispatch: Dispatch;
      let middlewareApi: MiddlewareApi = {
        getState: store.getState,
        dispatch: action => dispatch(action)
      };
      // 调用一次所有的中间件函数
      let middlewareChain = middlewares.map(middleware =>
        middleware(middlewareApi)
      );

      dispatch = compose(...middlewareChain)(store.dispatch);
      return { ...store, dispatch };
    };
  };
};
export default applyMiddleware;
