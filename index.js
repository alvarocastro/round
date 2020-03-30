const round = function (number, decimals = 2) {
	const p = 10 ** decimals;
	const fpFix = Number.EPSILON * (number < 0 ? -1 : 1);

	return Math.round((number + fpFix) * p) / p;
};

module.exports = round;
