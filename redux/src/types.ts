interface Action<T = any> {
  type: T;
}
interface AnyAction extends Action {
  [extraProps: string]: any;
}
type Reducer<S = any, A = AnyAction> = (
  state: S,
  action: A
) => S;
interface Unsubscribe {
  (): void;
}
interface Dispatch<A = AnyAction> {
  (action: A, ...extraArgs: any[]): A;
}
interface Store {
  dispatch: Dispatch;
  getState: () => any;
  subscribe: (observer: Function) => Unsubscribe;
}
interface ActionCreator<T = any> {
  (...args: Array<T>): T;
}
interface ActionCreatorsMapObject<Any> {
  [key: string]: ActionCreator<Any>;
}
type ReducersMapObject<S = any, A = AnyAction> = {
  [K in keyof S]: Reducer<S[K], A>;
};
type Compose = {
  (...args: Array<Function>): Function
}
type MiddlewareApi = {
  getState: Function,
  dispatch: Dispatch
}
export {
  Action,
  AnyAction,
  Reducer,
  Store,
  ActionCreator,
  ActionCreatorsMapObject,
  Dispatch,
  ReducersMapObject,
  Compose,
  Unsubscribe,
  MiddlewareApi
};
