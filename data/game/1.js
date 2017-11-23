() => {return {
	title: "Choose Your Own Adventure",
	variables: {},
	states: [
		{
			id: "default",
			body: {"title": "Welcome!", "text":"Would you like to play?"},
			choices: [{"name": "Start", "next": "first"}]
		},
		{
			id: "first",
			body: {
				"title": "First state. Where to go?", 
				"text": "more details..."
			}, 
			choices: [
				{"name": "Second", "next": "second"},
				{"name": "Third", "next": "third"}
		]}, 
		{
			id: "second",
			body: {
				"title": "This is the second state.",
				"text": "hello!"
			},
			choices: [
				{"name": "First", "next": "first"},
				{"name": "Third", "next": "third"}
			]
		},
		{
			id: "third",
			body: {
				"title": "Third state",
				"text": "You get the idea."
			},
			choices: [
				{"name": "First", "next": "first"},
				{"name": "Second", "next": "third"}
			]
		},
	]
}}
