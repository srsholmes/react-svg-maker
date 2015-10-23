import { CLICK_HEADING } from '../actions/actions';

export default function heading(state = 'This is the initial state heading', action) {
  switch (action.type) {
  case CLICK_HEADING:
    return 'This is new heading.';
  default:
    return state;
  }
}
