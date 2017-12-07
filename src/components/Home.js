import React from 'react';
import Interactive from 'react-interactive';
import { Thumbnail, Label, Col } from 'react-bootstrap';
import { Redirect } from 'react-router';
import ArticlePreview from './ArticlePreview';
import entries from '../../data/entries';
import '../styles/entry.css';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {redirect: false};
		this.redirect = this.redirect.bind(this);	
	}

	redirect(url) {
		console.log(url);
		this.setState({redirect: url});
	}
	
	render() {
		console.log(entries,this.state);
		if (this.state.redirect) {
			return <Redirect push to={this.state.redirect} />;
		}
		return (
			entries.map((e, i) => (
				<ArticlePreview article={e} key={i} redirect={() => this.redirect(e.url)}/>
			))
		);
	}
}

export default Home;
