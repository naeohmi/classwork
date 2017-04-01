var obj = {
	array: [1, 2, 3],
	int: 1,
	string: "one",
	boolean: false,
	object2: object3 = {
		array2: [4, 5, 6],
		int2: 2,
		string2: "two",
		boolean: true
	}
};

Object.keys(obj).map(function(x) {
	console.log(typeof obj[x]);
});
