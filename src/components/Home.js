import React from 'react';
import Interactive from 'react-interactive';
import { Thumbnail, Label, Col, Jumbotron } from 'react-bootstrap';
import ArticlePreview from './ArticlePreview';
import entries from '../../data/entries';
import '../styles/entry.css';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {featureIndex: 0}
	}

	render() {
		console.log(entries,this.state);
		let { featureIndex } = this.state;
		return (
			<div>
			{entries.featured.map((e, i) => (
				<ArticlePreview article={e} key={i} size={"feature"}/>		
			))}
			{entries.standard.map((e, i) => (
				<ArticlePreview article={e} key={i}/>
			))}
			</div>
		);
	}
}

export default Home;
