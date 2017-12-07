import React from 'react';
import { Col, Thumbnail, Label } from 'react-bootstrap';

class ArticlePreview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let { article, redirect } = this.props;
		return (
			<Col xs={12} sm={3}>
				<Thumbnail src="http://via.placeholder.com/250x200" alt="image">
					{ article.tags.map((t,j) => (
						<a href={"/tag/" + t} key={j}><Label bsStyle="info">{t}</Label></a>
					))}
					<a href="#" onClick={redirect}>
						<h3>{ article.title }</h3>
					</a>
				</Thumbnail>
			</Col>
		);
	}
}

export default ArticlePreview;
