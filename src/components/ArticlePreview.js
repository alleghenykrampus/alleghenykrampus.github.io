import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Thumbnail, Label, Panel, Row } from 'react-bootstrap';

class ArticlePreview extends React.Component {
	constructor(props) {
		super(props);
		this.medium = this.medium.bind(this);
		this.feature = this.feature.bind(this);
		this.tags = this.tags.bind(this);
		this.state = {size: {"medium": this.medium, "feature": this.feature}};
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
			<span className={"tag tag-" + t}><Link to={"/tag/" + t}>{t}</Link></span>			
		));
	}

	render() {
		let size = this.props.size || "medium";
		let renderSize = this.state.size[size];
		return renderSize();
	}
}

export default ArticlePreview;
