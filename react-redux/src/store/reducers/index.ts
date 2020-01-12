import {combineReducers} from '../../../../redux/src/index';
import counter from './counter';
import home from './home'
export default combineReducers({
  counter,
  home
})