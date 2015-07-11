'use strict';

const fetchData = require('./server/fetchData');
const extractOffers = require('./server/extractOffers');
const storeResults = require('./server/storeResults');

fetchData()
  .then(extractOffers)
  .then(storeResults);
