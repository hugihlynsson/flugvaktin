'use strict';

module.exports = function findNewOffers(offers) {
  // Since the offers don't have an id and the only way to identify each row is to use
  // all it's info, we serialise each offer and compare them that way.
  // If there is a better way to find new offers, please implement!
  const serializedOldOffers = offers.last.map(JSON.stringify);
  offers.new = offers.fresh
    .map(JSON.stringify)
    .filter(function(offer) {
      return serializedOldOffers.indexOf(offer) === -1;
    })
    .map(JSON.parse);
  return offers;
};
