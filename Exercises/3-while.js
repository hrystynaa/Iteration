'use strict';

const sum = (...args) => {
  let i = 0;
  let S = 0;
  while (i < args.length) {
    S += args[i];
    i++;
  }
  return S;
};

module.exports = { sum };
