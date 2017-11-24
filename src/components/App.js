import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import Navbar from './Navbar';
import { AdventureHandler } from './Adventure';
import s from '../styles/app.style';
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
        <Route path="/example" component={ExampleComponent} />
        <Route component={PageNotFound} />
      </Switch>
	</Row>
	</Grid>
    </div>
  );
}
