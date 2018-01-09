export const slugify = (a) => {
	let r = a.type || "";
	return r + (r[r.length-1] == '/' ? '' : "/") + [...a.title.split(' ').map(w => w.toLowerCase()), a.id.toString()].join('-');
}

export const entries = {
	featured: [
		{
			title: "Murder Mystery",
			id: "2",
			type: "game",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor urna non libero pellentesque convallis.",
			tags: ["game"],
			date: "2017-12-10",
		},
	],
	standard: [
		{
			title: "Murder Mystery",
			id: "2",
			type: "game",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor urna non libero pellentesque convallis.",
			tags: ["game"],
			date: "2017-12-9",
			trending: 1,
		},
		{
			title: "Murder Mystery",
			id: "2",
			type: "game",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor urna non libero pellentesque convallis.",
			tags: ["game"],
			date: "2017-12-8",
			trending: 2,
		},
		{
			title: "Murder Mystery",
			id: "2",
			type: "game",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor urna non libero pellentesque convallis.",
			tags: ["game"],
			trending: 3
		},
		{
			title: "Test Article",
			id: "3",
			type: "article",
			tags: ["news"],
			trending: 4,	
		},
		{
			title: "Test Listicle",
			id: "4",
			tags: ["list"],
			trending: 5,	
		}
	]
}
