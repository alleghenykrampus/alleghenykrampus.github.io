import React from 'react';
import { Button, Glyphicon, Fade, Panel, Row, Col, Image, Thumbnail } from 'react-bootstrap';
import '../styles/adventure.css';

class Adventure extends React.Component {
	constructor(props) {
		super(props);
		let vars = props.data.variables; 
		let initial = props.data.states.find(s => s.id === "default") || props.data.states[0] || {};
		this.state = {
			show: true,
			current: initial, 
			variables: (initial.action) ? initial.action(vars) : vars
		};
		console.log(this.state.variables);
		this.transition = this.transition.bind(this);
	}

	transition(choice) {
		console.log(choice);
		let vars = this.state.variables;
		let to = choice.next;
		to = (typeof to === "function") ? to(vars) : to;
		let next = this.props.data.states.find(s => s.id === to);
		if (choice.action) {
			vars = choice.action(vars);
		}
		this.setState({
					variables: vars,
					show: false,
				},()=>{console.log(this.state.variables)}
		);
		setTimeout(function() {this.setState({show: true, current: next, variables:vars})}.bind(this),500);
	}

	render() {
		const { current, show, variables} = this.state;
		const { title } = this.props.data;
		console.log(current);
		let body = current.body;
		body = (typeof body === "function") ? body(variables) : body;
		let choices = current.choices;
		choices = (typeof choices === "function") ? choices(variables) : choices;
		console.log(choices);
		return (
			<Col xs={12} sm={8} smOffset={2}>
				<h1>{ title }</h1>
				<Fade in={show}>
				<Panel>
				<div>
					<Row>
						<Prompt body={body} vars={variables}/>
					</Row>
					<Row>
						<ul className = "choices">
						{choices.map((c,i) =>
							<Choice
								key={i}
								name={c.name}
								type={c.type}
								onClick={() => this.transition(c)}
							/>
						)}
						</ul>
					</Row>
				</div>
				</Panel>
				</Fade>
			</Col>
		)
	}
}

export class AdventureHandler extends React.Component {
	constructor(props) {
		super(props);
		this.state = {data: null};
	}

	componentWillMount() {
		let id = this.props.match.params.id;
		fetch("../data/game/" + id + ".js")
		.then(res => res.text())
		.then((s) => {
			let data = eval(s);
			console.log("fetched data");
			this.setState({data: data()});
		});
	}
	
	render() {
		let d = this.state.data;
		console.log(d);
		return d ? <Adventure data={d} /> : "Loading...";
	}

}

const Prompt = (props) => {
	let [text, image, vars] = [props.body.text, props.body.image, props.vars];
	text = (typeof text === "function") ? text(vars) : text;
	let paragraphs = text.split("\n").map((pg, i) => <p key={i}>{pg}</p>);
	return (
		<Col xs={12}>
			{ image ? <Thumbnail src={image} bsClass="thumbnail prompt-thumbnail" responsive="true"/> : "" }
			{ paragraphs }
		</Col>
	);
}

const Choice = (props) => {
	let { name, onClick, type } = props;
	if (type === "speech") {
		return (
			<li>
				<Button bsClass="bubble" bsStyle="primary" onClick={ onClick }>{ name }</Button>
			</li>
		);
	}
	return (
		<li>
			<Button onClick={ onClick }>
				{ name + " "}
				<Glyphicon glyph={"chevron-right"} />
			</Button>
		</li>
	);
}

export default Adventure;
