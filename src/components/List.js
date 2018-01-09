import React from 'react';
import { ArticleHandler } from './Article';

class List extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { data } = this.props;	
		let { items } = data;
		return (
			<div>
			{ data.items.map((item, index) => (
				<div key={index}>
					<h3>{ item.meta.rank || index + 1 }. { item.meta.subtitle }</h3>
					<img src={item.meta.image}/>
					<p>{ item.body }</p>
				</div>
			))}
			</div>			
		);
	}
}

export class ListHandler extends ArticleHandler {
	constructor(props) {
		super(props);
		this.child = List;
	}

	parseData(data) {
		let lines = data.split("\n");
		if (lines[0] === "---") {
			let end = 1 + lines.slice(1).indexOf("---");
			if (end > 0) {
				let metaBlock = lines.slice(1, end);
				let body = lines.slice(end + 1).join("\n");
				return {meta: this.parseMetaBlock(metaBlock), items: this.findItemMetaBlocks(data)} 
			}
		}
	}

	findItemMetaBlocks(data) {
		let items = [];
		let lines = data.split("\n");
		let i = 0;
		let end = 0;
		while (i < lines.length) {
			if (lines[i] === "~~~") {
				// close the body of the previous block
				if (items.length > 0) {
					let prev = items.pop();
					prev.body = lines.slice(prev._start, i).join("\n");
					items.push(prev);
				}
				// make next block
				end = i + 1 + lines.slice(i + 1).indexOf("~~~");
				if (end > i) {
					let metaBlock = lines.slice(i + 1, end);
					items.push({meta: this.parseMetaBlock(metaBlock), _start: end + 1}); 
					i = end + 1;
					continue;
				}
			}
			i++;
		}
		// close the body of the final block
		if (items.length > 0) {
			let prev = items.pop();
			prev.body = lines.slice(prev._start, i).join("\n");
			items.push(prev);
		}
		console.log(items);
		return items;
	}
}

export default List;
