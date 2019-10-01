'use strict';

const range = (start, end) => {
  const output = [];
  for (let i = start; i <= end; i++) {
    output.push(i);
  }
  return output;
};

module.exports = { range };
