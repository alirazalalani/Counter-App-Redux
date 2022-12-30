import CounterReducer from './Counter/CounterReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  counter: CounterReducer,
});

export default rootReducer;
