import { createStore, applyMiddleware } from '../../../redux/src/index';
import reducer from './reducers/index';
import { Store, Dispatch, AnyAction, MiddlewareApi } from './types';
/**
 * 不同的中间件虽然业务不一样，功能不一样，但是它的签名和代码结构是一样的
 * api中有dispatch和getState两个属性
 * dispatch是原生store.dispatch用来派发action
 * getState是store.getState
 * @param api 
 */
const logger = (api:MiddlewareApi) => {
    return (next:Dispatch) => {
        return (action:AnyAction) => {
            console.log('老状态', api.getState());
            next(action);
            console.log('新状态', api.getState());
        }
    }
}
let store:Store = applyMiddleware(logger)(createStore)(reducer);
export default store;