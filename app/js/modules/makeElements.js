import React from 'react';
import loopElement from './loopElement';

export default function makeElements(el, type, componentTypes) {
  let arr = Array.isArray(el) ? el : [ el ];
  arr = arr.map(el => {
    switch(type) {
      case 'path':
          return (<path fill={el.fill} d={el.d} stroke={el.stroke} strokeWidth={el.strokeWidth} strokeLinejoin={el.strokeLinejoin} strokeMiterlimit={el.strokeMiterlimit} strokeDasharray={el.strokeDasharray}/>);
          break;
      case 'text':
          return (<text id={el.id} transform={el.transform} fill={el.fill} fontFamily={el.fontFamily} fontSize={el.fontSize}>{el.text}</text>);
          break;
      case 'rect':
          return (<rect id={el.id} x={el.x} y={el.y} transform={el.transform} fill={el.fill} width={el.width} height={el.height}/>);
          break;
      case 'line':
          return (<line id={el.id} stroke={el.stroke} strokeWidth={el.strokeWidth} x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2} fill={el.fill}/>);
          break;
      case 'polyline':
          return (<polyline id={el.id} stroke={el.stroke} strokeWidth={el.strokeWidth} points={el.points} fill={el.fill}/>);
          break;
      case 'polygon':
          return (<polygon id={el.id} fill={el.fill} points={el.points}/>);
          break;
      case 'circle':
          return (<circle fill={el.fill} cx={el.cx} cy={el.cy} r={el.r}/>);
          break;
      case 'clipPath':
        let comp_01 = loopElement(el, componentTypes);
        return (<defs id={el.id}>{comp_01}</defs>)           
        break;
      case 'defs':
        let comp_02 = loopElement(el, componentTypes);
        return (<defs id={el.id}>{comp_02}</defs>)           
        break;
      case 'g':
        let components = loopElement(el, componentTypes);
        return (<g id={el.id}>{components}</g>)           
          break;
      default:
          return (<path fill={el.fill} d={el.d} stroke={el.stroke} strokeWidth={el.strokeWidth} strokeLinejoin={el.strokeLinejoin} strokeMiterlimit={el.strokeMiterlimit} strokeDasharray={el.strokeDasharray}/>);
    }   
  });
  return arr;
}
