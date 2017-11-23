import React from 'react';
import { Button } from 'react-bootstrap';

class Adventure extends React.Component {
	constructor(props) {
		super(props);
		let vars = props.data.variables; 
		let initial = props.data.states[0] || {};
		this.state = { 
			current: initial, 
			variables: (initial.action) ? initial.action(vars) : vars
		};
		console.log(this.state.variables);
	}

	transition(choice) {
		const next = this.props.data.states[choice.next];
		let vars = this.state.variables;
		console.log(vars,next);
		if (next.action) {
			vars = next.action(vars);
		}
		this.setState({current: next, variables: vars},()=>{console.log(this.state.variables)});
	}

	render() {
		const { current } = this.state;
		return (
			<div>
				<Prompt text={current.text} image={current.image}/>
				<ul>
				{current.choices.map((c,i) =>
					<Choice
						key={i}
						name={c.name}
						onClick={() => this.transition(c)}
					/> 
				)}
				</ul>
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
	let { text, image } = props;
	return (
		<div>{ text }</div>
	);
}

const Choice = (props) => {
	let { name, onClick } = props;
	return (
		<li>
			<Button onClick={ onClick }>{ name }</Button>
		</li>
	);
}

export default Adventure;
