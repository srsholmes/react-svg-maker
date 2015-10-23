import React from 'react';

import makeElements from './makeElements';

export default function loopElement(group, componentTypes, options){
  let components = componentTypes.map((component) => {
    let $el;
    group[component] ? $el = group[component] : $el = [];
    let elements = makeElements($el, component, componentTypes, options);
    return elements;
  });
  return components;
}