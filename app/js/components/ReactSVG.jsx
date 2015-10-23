import React from 'react';
import { loopElement, makeElements } from '../modules';

let ReactSVG = React.createClass({
  render(){
    let shapeTypes = ['circle', 'clipPath', 'defs', 'ellipse', 'g', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon' ,'polyline' ,'radialGradient' ,'rect' ,'stop' ,'svg', 'text' ,'tspan'];
  	let group = this.props.svg.g;
  	let arr = Array.isArray(group) ? group : [ group ];
  	let components = arr.map((shape) => loopElement(shape, shapeTypes));
    return (
    	<svg version={this.props.svg.version} id={this.props.svg.id} x={this.props.svg.x} y={this.props.svg.y} viewBox={this.props.svg.viewBox} enableBackground={this.props.svg.enableBackground}>
    		{components}
			</svg>
    )
  }
});

export default ReactSVG;