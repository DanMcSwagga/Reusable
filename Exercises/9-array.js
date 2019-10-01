'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Dan Stetsenko', phone: '+380983308847' },
  { name: 'Jamie Siminoff', phone: '+38917412XXXX' }
];

const findPhoneByName = name => {
  for (const x of phonebook) {
    if (x.name === name) return x.phone;
  }
};


module.exports = { phonebook, findPhoneByName };
