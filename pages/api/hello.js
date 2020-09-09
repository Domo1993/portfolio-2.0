// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const myObject = {
	title: "Pokemon Stuff",
	list: [
		{ name: "pikachu", type: "electric" },
		{ name: "squirtle", type: "water" },
		{ name: "bulbasaur", type: "grass" },
	],
};

export default (req, res) => {
	res.statusCode = 200;
	res.json({ myObject });
};
