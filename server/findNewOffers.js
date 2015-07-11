'use strict';

const fs = require('fs');

module.exports = function findNewOffers(freshOffers) {
  console.log('Finding new offers');
  return new Promise(function(resolve, reject) {
    fs.readFile('offers.json', function(err, data) {
      if (err) {
        reject(new Error(err));
      } else {
        const oldOffers = JSON.parse(data);
        // Since the offers don't have an id and the only way to identify each row is to use
        // all it's info, we serialise each offer and compare them that way.
        // If there is a better way to find new offers, please implement!
        const serializedOldOffers = oldOffers.map(JSON.stringify);
        const newOffers = freshOffers
          .map(JSON.stringify)
          .filter(function(offer) {
            return serializedOldOffers.indexOf(offer) === -1;
          })
          .map(JSON.parse);

        console.log('Total counts: Old', oldOffers.length, '| Updated', freshOffers.length, '| New', newOffers.length);
        resolve(freshOffers);
      }
    });
  });
};
