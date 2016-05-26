import { CHANGE_PATH } from '../actions/actions';
import { svgDATA_02 } from '../constants/constants';
// import { normalize, Schema, arrayOf } from 'normalizr';

export default function svg_02(state = svgDATA_02, action) {
  switch (action.type) {
  case CHANGE_PATH:
  	console.log('CHANGE_PATH');
  	console.log('**** ACTION ****');
  	console.log(action.i);
  	//Need to mutate the state here. 
  	//Use immuatble or object assign.
    // try using https://github.com/gaearon/normalizr 
    console.log(state);
  	return Object.assign({}, state, state.svg.g.g.g.g.map((el, i) => {
      console.log(el);
      //do the check here for object or group, make array loop, blah blah.
      //Need a better data structure.
	  			let arr = ['green', 'blue', 'orange', 'yellow', 'pink', 'purple', 'black'];
	  			el.g[0].g.path.fill = arr[Math.floor(Math.random() * arr.length)];;
	  			el.g[0].g.path.className = 'spinner';
	  	})
  	);
 
  default:
    return state;
  }
}
