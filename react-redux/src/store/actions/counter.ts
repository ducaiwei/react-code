import { AnyAction, ADD1, MINUS1 } from '../types';
export default {
  add(): AnyAction {
    return { type: ADD1 };
  },
  minus(): AnyAction {
    return { type: MINUS1 };
  }
};
