import { CHANGE_POLYGON } from '../actions/actions';

import { svgDATA } from '../constants/constants';

export default function svg_01(state = svgDATA, action) {
	console.log(action);
  switch (action.type) {
  case CHANGE_POLYGON:
  	console.log('CHANGE_POLYGON');
  	console.log('**** ACTION ****');
  	console.log(action.i);
  	//Need to mutate the state here. 
  	//Use immuatble or object assign. 
  	return Object.assign({}, state, state.svg.g[0].polygon.map((el, i) => {
	  		if (i === action.i) {
	  			el.fill = 'orange'
	  		}
	  	})
  	);
 
  default:
    return state;
  }
}
