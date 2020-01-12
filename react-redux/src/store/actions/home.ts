import { AnyAction, ADD, MINUS } from '../types';
export default {
  add(): AnyAction {
    return { type: ADD };
  },
  minus(): AnyAction {
    return { type: MINUS };
  }
};
