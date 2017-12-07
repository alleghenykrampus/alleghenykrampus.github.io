import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import { AdventureHandler } from './Adventure';
import Navbar from './Navbar';
import Home from './Home';
import { Grid, Row } from 'react-bootstrap';

export default function App() {
  return (
	<div>
		<Navbar />
		<Grid>
			<Row>
     			<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/game/:id" component={AdventureHandler}/>
					<Route component={PageNotFound} />
				</Switch>
			</Row>
		</Grid>
    </div>
  );
}
