const round = function (number, decimals = 2) {
	if (typeof number !== 'number') {
		throw new TypeError('Must pass a number');
	}

	if (!Number.isInteger(decimals)) {
		throw new TypeError('The amount of decimals must be an integer number');
	}

	if (decimals < 0) {
		throw new TypeError('The amount of decimals can’t be negative');
	}

	const p = 10 ** decimals;
	const fpFix = Number.EPSILON * (number < 0 ? -1 : 1);

	return Math.round((number + fpFix) * p) / p;
};

module.exports = round;
