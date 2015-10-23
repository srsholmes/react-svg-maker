import { combineReducers } from 'redux';
import counter from './counter';
import heading from './heading';
import svg_01 from './svg_01';

const rootReducer = combineReducers({
  counter,
  heading,
  svg_01
});

export default rootReducer;
