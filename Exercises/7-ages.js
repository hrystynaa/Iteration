'use strict';

const ages = (persons) => {
  const age = {};
  for (const key in persons) {
    const dates = persons[key];
    age[key] = dates.died - dates.born;
  }
  return age;
};

module.exports = { ages };
