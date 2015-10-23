import { CHANGE_POLYGON } from '../actions/actions';

import { svgDATA } from '../constants/constants';

export default function svg_01(state = svgDATA, action) {
  switch (action.type) {
  case CHANGE_POLYGON:
  	console.log('CHANGE_POLYGON');
  	console.log('**** STATE ****');
  	console.log(state);
  	let newState = state.svg.g[0].polygon[1].fill = 'green'
  	return Object.assign({}, newState, state);
 
  default:
    return state;
  }
}
