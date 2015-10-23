import React from 'react';
import { loopElement, makeElements } from '../modules';

let ReactSVG = React.createClass({
  render(){
  	let group = this.props.svg.g;
  	let arr = Array.isArray(group) ? group : [ group ];
  	let components = arr.map((shape) => loopElement(shape, this.props.shapes));
    return (
    	<svg version={this.props.svg.version} id={this.props.svg.id} x={this.props.svg.x} y={this.props.svg.y} viewBox={this.props.svg.viewBox} enableBackground={this.props.svg.enableBackground}>
    		{components}
			</svg>
    )
  }
});

export default ReactSVG;