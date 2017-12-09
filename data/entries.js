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
		},
	],
	standard: [
		{
			title: "Murder Mystery",
			id: "2",
			type: "game",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor urna non libero pellentesque convallis.",
			tags: ["game"],
		},
		{
			title: "Murder Mystery",
			id: "2",
			type: "game",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor urna non libero pellentesque convallis.",
			tags: ["game"],
		},
		{
			title: "Murder Mystery",
			id: "2",
			type: "game",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor urna non libero pellentesque convallis.",
			tags: ["game"],
		},
	]
}
