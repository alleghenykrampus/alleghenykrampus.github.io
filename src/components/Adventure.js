import React from 'react';
import { Button, Glyphicon, Fade, Panel, Row, Col } from 'react-bootstrap';
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
	}

	transition(choice) {
		let next = this.props.data.states.find(s => s.id === choice.next);
		let vars = this.state.variables;
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
		return (
			<Col xs={8} xsOffset={2}>
				<h1>{ title }</h1>
				<Fade in={show}>
				<Panel>
				<div>
					<Row>
						<Prompt body={current.body} vars={variables}/>
					</Row>
					<Row>
						<ul className = "choices">
						{current.choices.map((c,i) =>
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
	let [text, vars] = [props.body.text, props.vars];
	console.log(props);
	return (
		<Col xs={12}>
			{ (typeof text === "function") ? text(vars) : text }
		</Col>
	);
}

const Choice = (props) => {
	let { name, onClick, type } = props;
	if (type === "speech") {
		return (
			<li>
				<Button bsClass="bubble" bsStyle="primary" onClick={ onclick }>{ name }</Button>
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
