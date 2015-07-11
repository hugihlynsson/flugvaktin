'use strict';

const cheerio = require('cheerio');

module.exports = function extractOffers(data) {
  const $ = cheerio.load(data);
  console.log('Extracting offers');

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
