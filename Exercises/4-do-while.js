'use strict';

const sum = (...args) => {
  let S = 0;
  let i = 0;
  if (args.length > 0) do {
    S += args[i];
    i++;
  } while (i < args.length);
  return S;
};

module.exports = { sum };
