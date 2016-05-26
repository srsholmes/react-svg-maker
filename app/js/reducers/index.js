import { combineReducers } from 'redux';
import counter from './counter';
import heading from './heading';
import svg_01 from './svg_01';
import svg_02 from './svg_02';

const rootReducer = combineReducers({
  counter,
  heading,
  svg_01, 
  svg_02
});

export default rootReducer;
