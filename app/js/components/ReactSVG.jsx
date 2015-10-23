import React from 'react';
import { loopElement, makeElements } from '../modules';

let ReactSVG = React.createClass({
  render(){
    let shapeTypes = ['g', 'circle', 'clipPath', 'defs', 'ellipse', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon' ,'polyline' ,'radialGradient' ,'rect' ,'stop' ,'svg', 'text' ,'tspan'];
  	let arr = Array.isArray(this.props.svg.g) ? this.props.svg.g : [ this.props.svg.g ];
    let options = this.props.options;
  	let components = arr.map((shape) => loopElement(shape, shapeTypes, options));
    return (
    	<svg version={this.props.svg.version} id={this.props.svg.id} x={this.props.svg.x} y={this.props.svg.y} viewBox={this.props.svg.viewBox} enableBackground={this.props.svg.enableBackground}>
    		{components}
			</svg>
    )
  }
});

export default ReactSVG;