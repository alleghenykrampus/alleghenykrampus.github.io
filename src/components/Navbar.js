import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

class Nav extends React.Component {
	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">The Krampus</Link>
					</Navbar.Brand>
				</Navbar.Header>
			</Navbar>	
			);
		};
}

export default Nav;
