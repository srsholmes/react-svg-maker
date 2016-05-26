import React from 'react';
import { loopElement, makeElements } from '../modules';

let ReactSVG = React.createClass({
  render(){
    let shapeTypes = ['g', 'circle', 'clipPath', 'defs', 'ellipse', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon' ,'polyline' ,'radialGradient' ,'rect' ,'stop' ,'svg', 'text' ,'tspan'];
  	let arr = Array.isArray(this.props.svg.svg.g) ? this.props.svg.svg.g : [ this.props.svg.svg.g ];
    let options = {
      changePolygon : this.props.options.changePolygon,
      changePath: this.props.options.changePath
    };
  	let components = arr.map((shape) => loopElement(shape, shapeTypes, options));
    return (
    	<svg version={this.props.svg.svg.version} id={this.props.svg.svg.id} x={this.props.svg.svg.x} y={this.props.svg.svg.y} viewBox={this.props.svg.svg.viewBox} enableBackground={this.props.svg.svg.enableBackground}>
    		{components}
			</svg>
    )
  }
});

export default ReactSVG;