import React from 'react';
import { Button, Glyphicon, Fade } from 'react-bootstrap';

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
		console.log(choice);
		const next = this.props.data.states.find(s => s.id === choice.next);
		let vars = this.state.variables;
		console.log(vars,next);
		if (next.action) {
			vars = next.action(vars);
		}
		this.setState({
					variables: vars,
					show: false,
				},()=>{console.log(this.state.variables)}
		);
		setTimeout(function() {this.setState({show: true, current: next})}.bind(this),500);
	}

	render() {
		const { current, show } = this.state;
		const { title } = this.props.data;
		return (
			<div>
				<h1>{ title }</h1>
				<Fade in={show}>
				<div>
					<Prompt body={current.body} />
					{current.choices.map((c,i) =>
						<Choice
							key={i}
							name={c.name}
							onClick={() => this.transition(c)}
						/> 
					)}
				</div>
				</Fade>
			</div>
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
	let { body } = props;
	return (
		<div>
			<h2>{ body.title }</h2>
			{ body.text }
		</div>
	);
}

const Choice = (props) => {
	let { name, onClick } = props;
	return (
		<Button onClick={ onClick }>
			{ name + " "}
			<Glyphicon glyph={"chevron-right"} />
		</Button>
	);
}

export default Adventure;
