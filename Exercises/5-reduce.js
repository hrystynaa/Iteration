'use strict';

const sum = (...args) => args.reduce((prev, curr) => (prev + curr), 0);

module.exports = { sum };
