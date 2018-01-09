import React from 'react';

class DataFetcher extends React.Component {
	constructor(props) {
		super(props);
		this.state = {data: null};
	}

	componentWillMount() {
		console.log("data fetcher init");
		let { id, cat, ext, then } = this.props;
		fetch("../data/" + cat + "/" + id + "." + ext)
		.then(res => res.text())
		.then((s) => {
			console.log("fetched data");
			this.setState({data: s});
			then(s);
		});
	}

	render() {
		return false;
	}
}

export default DataFetcher;
