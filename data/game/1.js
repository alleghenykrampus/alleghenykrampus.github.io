() => {return {
	title: "Choose Your Own Adventure",
	variables: {"visitCount": [0,0,0]},
	states: [
		{text: "First state. Where to go?", choices: [
			{"name": "Second", "next": 1},
			{"name": "Third", "next": 2}
		]}, 
		{text: "Second state. Where to go?", choices: [
			{"name": "First", "next": 0},
			{"name": "Third", "next": 2}
		]},
		{text: "Third state. Where to go?", choices: [
			{"name": "First", "next": 0},
			{"name": "Second", "next": 1}
		]},
	]
}}
