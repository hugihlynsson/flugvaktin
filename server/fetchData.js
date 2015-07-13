'use strict';

const request = require('request');

const fetchData = function() {
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

module.exports = fetchData;
