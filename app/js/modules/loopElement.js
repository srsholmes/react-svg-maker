import React from 'react';

import makeElements from './makeElements';

export default function loopElement(group, componentTypes){
  let components = componentTypes.map((component) => {
    let $el;
    group[component] ? $el = group[component] : $el = [];
    let elements = makeElements($el, component, componentTypes);
    return elements;
  });
  return components;
}