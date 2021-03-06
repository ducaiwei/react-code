import { Reducer, AnyAction, Store, Dispatch } from './types';
/**
 * createStore创建store store下挂载dispatch getState subscribe三个方法
 * @param reducer 
 * @param initialState 
 */
export default function createStore(
  reducer: Reducer,
  initialState?: any
): Store {
  // 初始状态
  let state: any = initialState;
  // 订阅函数
  let listeners: Array<Function> = [];
  // 分发函数
  let dispatch:Dispatch = (action: AnyAction): AnyAction => {
    state = reducer(state, action);
    // 执行所有订阅的监听函数
    listeners.forEach(listener => listener());
    return action;
  };
  // 获取state
  let getState = (): any => {
    return state;
  };
  // 订阅器
  let subscribe = (listener: Function) => {
    listeners.push(listener);
    let unsubscribe = ():void => {
        const index = listeners.indexOf(listener);
        listeners.splice(index, 1);
    };
    return unsubscribe;
  };
  let store: Store = {
    dispatch,
    getState,
    subscribe
  };
  // 创建仓库时先派发一次action  给初始state赋值
  dispatch({type: '@@REDUX_INIT'})
  return store;
}
