() => {return {
	title: "Can you solve the murder?",
	variables: {detective:0},
	states: [
		{
			id: "default",
			body: {
				title: "There has been a murder!", 
				text:"This morning, the corpse of local millionaire Cornelius C. Bryant was discovered in one of the many king-sized beds in his lavish mansion.Authorities initially suspected that the old fart had died of natural causes, but the coroner's report revealed he had been smothered with his pillow! Do you think you have what it takes to crack the case?"
			},
			choices: [
				{
					name: "No trouble at all! I am Rutherford S. Godfried, the greatest detective the world has ever known!",
					action: (vars) => Object.assign(vars, {detective: 1}),
					next: "foyer",
				},
				{
					name: "Although I am just a humble pastry chef, I will try my best.",
					action: (vars) => Object.assign(vars, {detective: 2}),
					next: "foyer",
				}
			]
		},
		{
			id: "foyer",
			body: {
				text: "The local police chief has gathered up the main suspects in the foyer: the maid, the butler, and the wild-eyed, blood-soaked drifter.",
			},
			choices: [
				{
					name: "Interrogate the maid",
					next: "maid"
				},
				{
					name: "Interrogate the butler",
					next: "butler"
				},
				{
					name: "Interrogate the drifter",
					next: "drifter"
				},
				{
					name: "Arrest the perpetrator",
					next: "arrest"
				},
			]
		},
		{
			id: "maid",
			body: {
				text: (vars) => {
					if (vars.detective === 2) {
						return '"Oh, you must be here about the job opening," says the maid. "I\'m very sorry to break this to you, but Mr. Bryant won\'t be needing a pastry chef anymore, as he is no doubt gorging himself on chocolate lava cake somewhere up in Heaven." \n She notices your Junior Deputy badge. "Oh, my mistake. You must be the special investigator everyone is talking about. How can I help you?"';
					} else {
						return '"Oh my stars, it\'s world-renowned detective Rutherford S. Godfried!" exclaims the maid. "What an honor! Please, tell me if there is any way I can help you catch the killer."';
					}
				}
			},
			choices: [
				{
					type: "speech",
					name: "Do you know who did it?",
					next: "maid2",
				}
			]
		}
	]
}}
