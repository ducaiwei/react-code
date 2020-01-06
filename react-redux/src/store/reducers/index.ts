import { AnyAction, CounterState, ADD, MINUS } from '../types';
let initialState: CounterState = {
  num: 0
};
export default (state: CounterState, action: AnyAction): CounterState => {
  switch (action.type) {
    case ADD:
      return { num: state.num + 1 };
    case MINUS:
      return { num: state.num - 1 };
    default:
      return initialState;
  }
};
