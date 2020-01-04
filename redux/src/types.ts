interface Action<T=any> {
    type: T
}
interface AnyAction extends Action {
    [extraProps: string]: any
}
type Reducer<S = any> = (state: S, action:Action) => S
interface Unsubscribe {
    (): void
  }
interface Store {
    dispatch: (action:Action) => Action,
    getState: () => any,
    subscribe: (observer: Function) => {unsubscribe: Unsubscribe}
}
export {
    Action,
    AnyAction,
    Reducer,
    Store
}