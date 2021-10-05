'use strict';

const sum = (...args) => {
  let S = 0;
  for (const a of args) {
    S += a;
  }
  return S;
};

module.exports = { sum };
