interface Action<T=any> {
    type: T
}
interface AnyAction extends Action {
    [extraProps: string]: any
}
interface CounterState {
    num:number
}
interface Unsubscribe {
    (): void
}
interface Store {
    dispatch: (action:Action) => Action,
    getState: () => any,
    subscribe: (observer: Function) => Unsubscribe
}
const ADD:string = 'ADD';
const MINUS:string = 'MINUS';
const ADD1:string = 'ADD1';
const MINUS1:string = 'MINUS1';
export {
    Action,
    AnyAction,
    CounterState,
    ADD,
    MINUS,
    Store,
    Unsubscribe,
    ADD1,
    MINUS1
}