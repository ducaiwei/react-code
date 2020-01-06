import { createStore } from '../../../redux/src/index';
import reducer from './reducers/index';
import { Store } from './types';
let store:Store = createStore(reducer);
export default store;