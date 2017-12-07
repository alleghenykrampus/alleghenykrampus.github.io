import React from 'react';
import Interactive from 'react-interactive';
import { Thumbnail, Label, Col } from 'react-bootstrap';
import ArticlePreview from './ArticlePreview';
import entries from '../../data/entries';
import '../styles/entry.css';

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(entries,this.state);
		return (
			entries.map((e, i) => (
				<ArticlePreview article={e} key={i}/>
			))
		);
	}
}

export default Home;
