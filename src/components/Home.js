import React from 'react';
import Interactive from 'react-interactive';
import { Thumbnail, Label, Col, Jumbotron, } from 'react-bootstrap';
import ArticlePreview from './ArticlePreview';
import { slugify } from '../../data/entries.js';
import '../styles/entry.css';

class Home extends React.Component {
	constructor(props) {
		super(props);
		let { standard, featured } = this.props.entries;
		this.state = {
			featureIndex: 0, 
			standard: standard.map(a => Object.assign(a, {url: slugify(a)})), 
			featured: featured.map(a => Object.assign(a, {url: slugify(a)})),
		}
	}

	render() {
		let { standard, featured } = this.state;
		console.log(this.state);
		// TODO: manually choose trending articles
		return (
			<div>
			{featured.map((e, i) => (
				<ArticlePreview article={e} key={i} size={"feature"}/>		
			))}
			<Col xs={12}>
				<h2 style={{textAlign:"center"}}>New & Trending <span className="glyphicon glyphicon-fire" style={{color: "#ff861e"}}/></h2>
			</Col>
			{standard.map((e, i) => (
				<ArticlePreview article={e} key={i} trending={i + 1}/>
			))}
			</div>
		);
	}
}

export default Home;
