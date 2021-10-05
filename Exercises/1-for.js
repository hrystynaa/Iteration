'use strict';

const sum = (...args) => {
  let S = 0;
  for (let i = 0; i < args.length; i++) {
    S += args[i];
  }
  return S;
};

module.exports = { sum };
