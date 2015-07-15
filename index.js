'use strict';

const fetchData = require('./server/fetchData');
const extractOffers = require('./server/extractOffers');
const appendLastOffers = require('./server/appendLastOffers');
const findNewOffers = require('./server/findNewOffers');
const storeResults = require('./server/storeResults');
const emailNewOffers = require('./server/emailNewOffers');

(function circle() {
  fetchData()
    .then(extractOffers)
    .then(appendLastOffers)
    .then(findNewOffers)
    .then(emailNewOffers)
    .then(storeResults)
    .then(function(offers) {
      console.log('Updated data successfully, new offers:', offers.new.length);
    })
    .catch(function(err) {
      console.log('Updating data failed');
      console.trace(err.stack);
    })
    .then(function() {
      setTimeout(circle, Math.round(1000 * 60 * 4 + Math.random() * 60 * 1000));
    });
})();
