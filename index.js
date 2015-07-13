'use strict';

const fetchData = require('./server/fetchData');
const extractOffers = require('./server/extractOffers');
const findNewOffers = require('./server/findNewOffers');
// const storeResults = require('./server/storeResults');

fetchData()
  .then(extractOffers)
  .then(findNewOffers)
  // .then(storeResults);
