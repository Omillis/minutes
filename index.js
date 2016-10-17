'use strict';
const seconds = require('@saadshahd/seconds');

module.exports = function (number) {
	return number * seconds(60);
};
