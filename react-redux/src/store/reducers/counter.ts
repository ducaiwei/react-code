import { AnyAction, CounterState, ADD1, MINUS1 } from '../types';
let initialState: CounterState = {
  num: 0
};
export default (state: CounterState = initialState, action: AnyAction): CounterState => {
  switch (action.type) {
    case ADD1:
      return { num: state.num + 1 };
    case MINUS1:
      return { num: state.num - 1 };
    default:
      return state;
  }
};
