'use strict';

const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');

const fetchData = function() {
  console.log('Fetching data');
  return new Promise(function(resolve, reject) {
    const url = 'https://www.flugfelag.is/nettilbod?departureAirport=RKV&destinationAirport=AEY&fareclasslimitations=U,E,S,T,T1,T2';
    request.get({url: url}, function(err, res, body) {
      if (err) {
        reject(new Error(err));
      } else if (res.statusCode !== 200) {
        reject(new Error('Faild to fetch data, got bad status: ' + res.statusCode));
      } else {
        resolve(body);
      }
    });
  });
};

const extractOffers = function(data) {
  const $ = cheerio.load(data);

  const headers = $('.fare-list-table-header');
  return $('.fare-list-table-container').map(function(headerIndex, container) {
    return $(container).find('.fare-list-table-row').map(function(rowIndex, row) {
      const lis = $(row).find('td');
      return {
        route: headers.eq(headerIndex).text().trim(),
        date: lis.eq(1).text().trim(),
        time: lis.eq(2).text().trim(),
        price: lis.eq(3).text().trim(),
        link: lis.eq(4).find('a').attr('href'),
      };
    }).get();
  }).get();
};

const storeResults = function(offers) {
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

fetchData().then(extractOffers).then(storeResults);
