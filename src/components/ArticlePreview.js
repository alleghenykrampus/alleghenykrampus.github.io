import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Col, Thumbnail, Label, Panel, Row } from 'react-bootstrap';

class ArticlePreview extends React.Component {
	constructor(props) {
		super(props);
		this.medium = this.medium.bind(this);
		this.feature = this.feature.bind(this);
		this.tags = this.tags.bind(this);
		this.state = {size: {"medium": this.medium, "feature": this.feature}, redirect: false};
	}

	medium() {
		let { article } = this.props;
		return (
			<Col xs={12} sm={4}>
				<Thumbnail bsClass="article-thumbnail" src="http://placeimg.com/270/150/any" alt="image">
					<Link to={ article.url }>
						<h4>{ article.title }</h4>
					</Link>
					{ this.tags() }
				</Thumbnail>
			</Col>
		);
	}
	
	feature() {
		let { article } = this.props;
		return (
			<Col xs={12}>
			<div className="feature" style={{
				background: "url('https://placeimg.com/900/500/any')",
			}}>
			<Row>
				<div className="feature-panel-wrapper">
				<Panel bsClass="feature-panel">
					<Link to={ article.url }>
						<h2>{ article.title }</h2>
					</Link>
					{ this.tags() }
				</Panel>
				</div>
			</Row>
			</div>
			</Col>
		);
	}

	tags() {
		let { article } = this.props;
		return article.tags.map((t,i) => (
			<span className={"tag tag-" + t} key={i}><Link to={"/tag/" + t}>{t}</Link></span>			
		));
	}

	render() {
		let { article } = this.props;
		let redirect = this.state.redirect;
		if (redirect) {
			this.setState({redirect: false});
			return <Redirect to={ article.url } push/>
		}
		let size = this.props.size || "medium";
		let renderSize = this.state.size[size];
		return (<div onClick={() => this.setState({redirect: true})}>{ renderSize() }</div>);
	}
}

export default ArticlePreview;
