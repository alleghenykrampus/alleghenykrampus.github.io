import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import { AdventureHandler } from './Adventure';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Home from './Home';
import { Grid, Row, Col } from 'react-bootstrap';

export default function App(props) {
	console.log(props);
  return (
	<div>
		<Navbar />
		<Grid>
			<Row>
				<Col xs={12} md={10}>
					<Switch>
						<Route exact path="/" render={() => <Home entries={props.entries}/>} />
						<Route path="/game/:slug" component={(s) => routeContent(s.match.params.slug, AdventureHandler)} />
						<Route component={PageNotFound} />
					</Switch>
				</Col>
				<Col xs={12} md={2}>
					<Sidebar />
				</Col>
			</Row>
		</Grid>
    </div>
  );
}

function matchSlug(slug) {
	let re = /^(?:(?:[a-zA-Z])*\-)*((?:[0-9])+)$/; // arbitrarily many groups of dash sep. letters, ending in number
	let match = re.exec(slug);
	console.log(match);
	if (match) {
		return match[1];
	}
	return false;
}

function routeContent(slug, next) {
	let id = matchSlug(slug);
	if (id) {
		return React.createElement(next, {id: id});
	}
	return <PageNotFound />;
}
