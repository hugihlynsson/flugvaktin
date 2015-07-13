'use strict';

const fs = require('fs');

module.exports = function storeResults(offers) {
  return new Promise(function(resolve, reject) {
    fs.writeFile('./data/offers.json', JSON.stringify(offers.fresh, null, 2), function(err) {
      if (err) {
        reject(new Error(err));
      } else {
        resolve(offers);
      }
    });
  });
};
