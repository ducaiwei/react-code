/**
 * 把多个action合并成一个actionCreators
 */
import { ActionCreator, ActionCreatorsMapObject, Dispatch } from './types';
const bindActionCreator = function(
  actionCreator: ActionCreator<any>,
  dispatch: Dispatch
): any {
  // 执行action函数时  自动调用store.dispatch派发
  return function(this: any, ...args: any[]) {
    return dispatch(actionCreator.apply(this, args));
  };
};
const bindActionCreators = (
  // xxx | xxx ts中联合类型  表示actionCreators参数类型是二者中其一
  actionCreators: ActionCreator<any> | ActionCreatorsMapObject<any>,
  dispatch: Dispatch
): ActionCreatorsMapObject<any> => {
  let bindActionCreators: ActionCreatorsMapObject<any> = {};
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }
  for(const key in actionCreators) {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      bindActionCreators[key] = bindActionCreator(actionCreator, dispatch)
    }
  }
  return bindActionCreators;
};
export default bindActionCreators;
