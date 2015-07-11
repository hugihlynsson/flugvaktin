'use strict';

const fs = require('fs');

module.exports = function storeResults(offers) {
  console.log('Writing data');
  return new Promise(function(resolve, reject) {
    fs.writeFile('offers.json', JSON.stringify(offers, null, 2), function(err) {
      if (err) {
        reject(new Error(err));
      } else {
        resolve(offers);
      }
    });
  });
};
