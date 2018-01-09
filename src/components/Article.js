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
		this.child = {component: Article, cat: "article", ext: "md"};
	}

	parseMetaBlock(block) {
		// rudimentary YAML parser for metadata
		if (!block) {
			return {};
		}
		let vars = {};
		console.log(block);
		block.forEach(ln => {
			let i = ln.indexOf(":");
			let key = ln.slice(0, i);
			let val = ln.slice(i + 1).trimLeft();
			vars[key] = val;
		});
		return vars;
	}

	parseData(data) {
		let lines = data.split("\n");
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
			return <DataFetcher cat={this.child.cat} id={this.props.id} ext={this.child.ext} then={d => this.setState({data: d}) }/>
		}
		return React.createElement(this.child.component, {data: this.parseData(data)});
	}
}

export default Article;
