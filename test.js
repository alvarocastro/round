const test = require('ava');
const round = require('.');

test('Should round properly', t => {
	t.is(round(1, 2), 1);
	t.is(round(0.005, 2), 0.01);
	t.is(round(1.005, 2), 1.01);
	t.is(round(2.005, 2), 2.01);
	t.is(round(-1.005, 2), -1.01);
});

test('Should put the ninimum amount of decimals', t => {
	t.is(round(1, 10), 1);
	t.is(round(1.111111, 0), 1);
	t.is(round(1.111111, 1), 1.1);
	t.is(round(1.111111, 2), 1.11);
	t.is(round(1.111111, 3), 1.111);
	t.is(round(1.111111, 4), 1.1111);
	t.is(round(1.111111, 5), 1.11111);
	t.is(round(1.111111, 6), 1.111111);
	t.is(round(1.111111, 7), 1.111111);
	t.is(round(1.111111, 8), 1.111111);
});

test('Should default the decimals amount to 2', t => {
	t.is(round(1.111111), 1.11);
});

test('Should throw error if ’number’ is non numeric', t => {
	t.throws(() => {
		return round('bad');
	}, {
		instanceOf: TypeError,
		message: 'Must pass a number'
	});
});

test('Should throw error if ’decimals’ is not integer', t => {
	t.throws(() => {
		return round(1, 1.3);
	}, {
		instanceOf: TypeError,
		message: 'The amount of decimals must be an integer number'
	});
});

test('Should throw error if ’decimals’ is negative', t => {
	t.throws(() => {
		return round(1, -2);
	}, {
		instanceOf: TypeError,
		message: 'The amount of decimals can’t be negative'
	});
});
