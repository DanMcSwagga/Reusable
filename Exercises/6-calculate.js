'use strict';

const square = x => x * x;

const cube = x => x ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const output = [];
  let temp;
  for (let i = 0; i < 10; i++) {
    temp = average(square(i), cube(i));
    output.push(temp);
  }
  return output;
};

module.exports = { square, cube, average, calculate };
