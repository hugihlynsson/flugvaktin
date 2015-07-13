'use strict';

const fetchData = require('./server/fetchData');
const extractOffers = require('./server/extractOffers');
const appendLastOffers = require('./server/appendLastOffers');
const findNewOffers = require('./server/findNewOffers');
const storeResults = require('./server/storeResults');

fetchData()
  .then(extractOffers)
  .then(appendLastOffers)
  .then(findNewOffers)
  .then(storeResults)
  .then(function(offers) {
    console.log('Updated data successfully, new offers: ', offers.new.length);
  })
  .catch(function(err) {
    console.log('Updating data failed', err);
  });
