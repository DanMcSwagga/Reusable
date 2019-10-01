'use strict';

const rangeOdd = (start, end) => {
  const output = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      output.push(i);
    }
  }
  return output;
};

module.exports = { rangeOdd };
