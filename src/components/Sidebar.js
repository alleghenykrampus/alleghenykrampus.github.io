import React from 'react';
import { Well } from 'react-bootstrap';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Well>
				<h3>Follow Us</h3>
				<p><a target="_blank" href="https://www.facebook.com/ackrampus">{ fbIcon }</a></p>
				<p><a target="_blank" href="https://twitter.com/ackrampus">{ twIcon }</a></p>
			</Well>
		);
	}
}

const fbIcon = (
	<svg width="76" height="76" xmlns="http://www.w3.org/2000/svg">
	<g>
	<path id="svg_49" d="m37.99999,0.00001c-21,0 -38,17 -38,38c0,21 17,38 38,38c21,0 38,-17 38,-38c0,-21 -17,-38 -38,-38zm18.5,54c0,1.1 -0.5,1.9 -1.7,1.9l-9.3,0l0,-14l4.8,0l0.7,-6l-5.5,0l0,-3.1c0,-1.6 0.4,-2.9 2.7,-2.9l3.3,0l0,-4.8c-1,-0.1 -2.6,-0.2 -4.6,-0.2c-4.2,0 -7.4,2.6 -7.4,7.3l0,3.7l-5,0l0,6l5,0l0,14l-17.3,0c-1.1,0 -1.7,-0.7 -1.7,-1.9l0,-32.7c0,-1.1 0.6,-2.5 1.7,-2.5l32.7,0c1.1,0 1.7,1.4 1.7,2.5l0,32.7l-0.1,0z" fill="#43619C"/>
	</g>
	</svg>
)

const twIcon = (
	<svg width="76" height="76" xmlns="http://www.w3.org/2000/svg">
	<g id="Twitter_6_">
	<circle id="svg_1" r="38" cy="38.00001" cx="38.00002" fill="#24A9E6"/>
	<path d="m55.30002,22.80001c-1.5,0.9 -3.1,1.6 -4.9,1.9c-1.4,-1.5 -3.4,-2.5 -5.6,-2.5c-4.2,0 -7.7,3.5 -7.7,7.9c0,0.6 0.1,1.2 0.2,1.8c-6.4,-0.3 -12,-3.5 -15.8,-8.2c-0.7,1.2 -1,2.5 -1,4c0,2.7 1.4,5.1 3.4,6.6c-1.3,0 -2.4,-0.4 -3.5,-1l0,0.1c0,3.8 2.6,7 6.2,7.7c-0.6,0.2 -1.3,0.3 -2,0.3c-0.5,0 -1,0 -1.4,-0.1c1,3.1 3.8,5.4 7.2,5.5c-2.6,2.1 -5.9,3.4 -9.5,3.4c-0.6,0 -1.2,0 -1.8,-0.1c3.4,2.2 7.4,3.5 11.8,3.5c14.1,0 21.9,-12 21.9,-22.4c0,-0.3 0,-0.7 0,-1c1.5,-1.1 2.8,-2.5 3.8,-4.1c-1.4,0.6 -2.9,1.1 -4.4,1.2c1.3,-1.2 2.5,-2.7 3.1,-4.5z" fill="#FFFFFF" id="svg_2"/>
	</g>
	</svg>
)

export default Sidebar;
