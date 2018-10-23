function flatten(arrayToFlatten) {
	return arrayToFlatten.reduce((acc, cur) => 
		Array.isArray(cur) ? acc.concat(flatten(cur)) : acc.concat(cur), 
		[]
	);
};

module.exports = flatten