import React from 'react';
import marked from 'marked';
import DataFetcher from './DataFetcher';

class Article extends React.Component {
	constructor(props) {
		super(props);	
	}

	render() {
		let { data } = this.props;
		console.log(data)
		return <div dangerouslySetInnerHTML={ {__html: marked(data.body)} }/>;
	}
}

export class ArticleHandler extends React.Component {
	constructor(props) {
		super(props);
		this.state = {data: null};
		this.parseData = this.parseData.bind(this);
		this.parseMetaBlock = this.parseMetaBlock.bind(this);
	}

	parseMetaBlock(block) {
		if (!block) {
			return {};
		}
		let vars = {};
		console.log(block);
		block.forEach(ln => {
			let [ key, val ] = ln.split(":");
			vars[key] = val.trimLeft();
		});
		return vars;
	}

	parseData(data) {
		let lines = data.split("\n");
		// todo: generalize to arbitrarily many blocks 
		// (e.g. for listicle entries with unique metadata)
		if (lines[0] === "---") {
			let end = 1 + lines.slice(1).indexOf("---");
			if (end > 0) {
				let metaBlock = lines.slice(1, end);
				let body = lines.slice(end + 1).join("\n");
				return {meta: this.parseMetaBlock(metaBlock), body: body} 
			}
		}
		return {body: data};
	}

	render() {
		let { data } = this.state;
		if (!data) {
			return <DataFetcher cat={'article'} id={this.props.id} ext="md" then={d => this.setState({data: d}) }/>
		}
		return <Article data={ this.parseData(data) }/>;
	}
}

export default Article;
