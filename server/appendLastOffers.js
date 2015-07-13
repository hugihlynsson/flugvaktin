'use strict';

const fs = require('fs');

module.exports = function appendLastOffers(freshOffers) {
  return new Promise(function(resolve, reject) {
    fs.readFile('./data/offers.json', function(err, data) {
      if (err) {
        if (err.code === 'ENOENT') {
          // The file does not exist, so we just continue with an empty list
          console.log("Couldn't read offer.json, continuing with an empty offer list");
          resolve({
            fresh: freshOffers,
            last: [],
          });
        } else {
          reject(new Error(err));
        }
      } else {
        resolve({
          fresh: freshOffers,
          last: JSON.parse(data),
        });
      }
    });
  });
};
