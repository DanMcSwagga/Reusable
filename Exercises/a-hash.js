'use strict';

const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Dan Stetsenko': '+380983308847',
  'Jamie Siminoff': '+38917412XXXX'
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
