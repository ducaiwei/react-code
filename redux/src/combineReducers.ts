import {ReducersMapObject, AnyAction, Reducer} from './types';
/**
 * combineReducers只是一个工具函数
 * 项目中有多个模块的reducers时可以调用combineReducers合并成一个reducer
 * redux中reducer就是一个函数 第一个参数是state 第二个参数是action
 * reducers: {
 *  reducer1: function,
 *  reducer2: function
 * }
 */

function combineReducers<S, A = AnyAction>(reducers: ReducersMapObject<S,A>): Reducer<S>
function combineReducers<S, A = AnyAction>(reducers: ReducersMapObject<S,A>): Reducer<S, A> {
    return (state: S = {} as S, action: A):S => {
        // state是合并后的state
        const nextState:S = {} as S;
        let key: keyof S;
        for(key in reducers) {
            const reducer = reducers[key];
            const previousStateForKey = state[key];
            const nextStateForKey = reducer(previousStateForKey, action)
            nextState[key] = nextStateForKey
        }
        return nextState;
    }
}
export default combineReducers;