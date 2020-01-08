function add (a, b) {
	return a + b;
};

function subtract (a, b) {
	return a - b;
};

function sum (array) {
	return array.reduce((total, currentValue) => total + currentValue, 0);
};

function multiply (array) {
	return array.length
	? array.reduce((total, currentValue) => total * currentValue)
	: 0;
};

function power(base, exponent) {
	return Math.pow(base, exponent);
};

function factorial(a) {
	if (a < 0) return;
	if (a === 0) return 1;
	return a * factorial(a-1);
};