import React from 'react';
import { loopElement, makeElements } from '../modules';

let ReactSVG = React.createClass({
  render(){
    let shapeTypes = ['g', 'circle', 'clipPath', 'defs', 'ellipse', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon' ,'polyline' ,'radialGradient' ,'rect' ,'stop' ,'svg', 'text' ,'tspan'];
  	let arr = Array.isArray(this.props.svgData.svg.g) ? this.props.svgData.svg.g : [ this.props.svgData.svg.g ];
    let options = {
      changePolygon : this.props.options.changePolygon
    };
  	let components = arr.map((shape) => loopElement(shape, shapeTypes, options));
    return (
    	<svg version={this.props.svgData.svg.version} id={this.props.svgData.svg.id} x={this.props.svgData.svg.x} y={this.props.svgData.svg.y} viewBox={this.props.svgData.svg.viewBox} enableBackground={this.props.svgData.svg.enableBackground}>
    		{components}
			</svg>
    )
  }
});

export default ReactSVG;