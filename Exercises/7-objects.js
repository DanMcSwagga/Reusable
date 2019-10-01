'use strict';

const fn = () => {
  const CONST_OBJ = { name: '' };
  let varObj = { name: '' };
  CONST_OBJ.name = 'Bradley';
  varObj.name = 'Sharon';
  const otherObj = { someProperty: '' };
  varObj = otherObj;
  const createUser = (name, city) => ({ name, city });
  console.log(createUser('Max', 'Roma'));
};

module.exports = { fn };
