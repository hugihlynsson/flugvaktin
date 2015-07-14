'use strict';

const assert = require('assert');
const findNewOffers = require('../findNewOffers');

describe('findNewOffers', function() {
  it('should return an empty list if there are no new offers', function() {
    assert.deepEqual(findNewOffers({last: [], fresh: []}).new, []);
  });
  it('should find the offers and return a list of them as objects', function() {
    const lastOffers = [
      {
        route: 'Reykjavík (RKV) - Akureyri (AEY)',
        date: '15.7.2015',
        time: '14:00',
        price: '12400 ISK',
        link: '/flight/search?interline=false&fromCityCode=RKV&toCityCode=AEY&departureDateString=2015-07-15&returnDateString=2015-07-29&adults=1&children=0&infants=0&roundTrip=false&useFlexDates=false&allInclusive=undefined&promocode=&fareTypeCategory=1&currency=ISK',
      },
      {
        route: 'Reykjavík (RKV) - Akureyri (AEY)',
        date: '15.7.2015',
        time: '17:30',
        price: '12400 ISK',
        link: '/flight/search?interline=false&fromCityCode=RKV&toCityCode=AEY&departureDateString=2015-07-15&returnDateString=2015-07-29&adults=1&children=0&infants=0&roundTrip=false&useFlexDates=false&allInclusive=undefined&promocode=&fareTypeCategory=1&currency=ISK',
      },
      {
        route: 'Reykjavík (RKV) - Akureyri (AEY)',
        date: '15.7.2015',
        time: '20:00',
        price: '9700 ISK',
        link: '/flight/search?interline=false&fromCityCode=RKV&toCityCode=AEY&departureDateString=2015-07-15&returnDateString=2015-07-29&adults=1&children=0&infants=0&roundTrip=false&useFlexDates=false&allInclusive=undefined&promocode=&fareTypeCategory=1&currency=ISK',
      },
    ];
    const freshOffers = [
      {
        route: 'Reykjavík (RKV) - Akureyri (AEY)',
        date: '15.7.2015',
        time: '14:00',
        price: '12400 ISK',
        link: '/flight/search?interline=false&fromCityCode=RKV&toCityCode=AEY&departureDateString=2015-07-15&returnDateString=2015-07-29&adults=1&children=0&infants=0&roundTrip=false&useFlexDates=false&allInclusive=undefined&promocode=&fareTypeCategory=1&currency=ISK',
      },
      {
        route: 'Reykjavík (RKV) - Akureyri (AEY)',
        date: '15.7.2015',
        time: '20:00',
        price: '9700 ISK',
        link: '/flight/search?interline=false&fromCityCode=RKV&toCityCode=AEY&departureDateString=2015-07-15&returnDateString=2015-07-29&adults=1&children=0&infants=0&roundTrip=false&useFlexDates=false&allInclusive=undefined&promocode=&fareTypeCategory=1&currency=ISK',
      },
      {
        route: 'Akureyri (AEY) - Reykjavík (RKV)',
        date: '16.7.2015',
        time: '09:40',
        price: '11700 ISK',
        link: '/flight/search?interline=false&fromCityCode=AEY&toCityCode=RKV&departureDateString=2015-07-16&returnDateString=2015-07-30&adults=1&children=0&infants=0&roundTrip=false&useFlexDates=false&allInclusive=undefined&promocode=&fareTypeCategory=1&currency=ISK',
      },
    ];
    const expectedNewOffers = [
      {
        route: 'Akureyri (AEY) - Reykjavík (RKV)',
        date: '16.7.2015',
        time: '09:40',
        price: '11700 ISK',
        link: '/flight/search?interline=false&fromCityCode=AEY&toCityCode=RKV&departureDateString=2015-07-16&returnDateString=2015-07-30&adults=1&children=0&infants=0&roundTrip=false&useFlexDates=false&allInclusive=undefined&promocode=&fareTypeCategory=1&currency=ISK',
      },
    ];
    assert.deepEqual(findNewOffers({last: lastOffers, fresh: freshOffers}).new, expectedNewOffers);
  });
});
