export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const CLICK_HEADING = 'CLICK_HEADING';
export const CHANGE_POLYGON = 'CHANGE_POLYGON';
export const CHANGE_PATH = 'CHANGE_PATH';

export function changeHeading() {
  return {
    type: CLICK_HEADING
  };
}

export function changePath(i) {
  return {
    type: CHANGE_PATH, i
  };
}

export function changePolygon(i) {
  return {
    type: CHANGE_POLYGON, i
  };
}