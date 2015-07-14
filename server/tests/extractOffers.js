'use strict';

const assert = require('assert');
const extractOffers = require('../extractOffers');

describe('extractOffers', function() {
  it('should return an empty list if there are no offers', function() {
    assert.deepEqual(extractOffers(''), []);
  });
  it('should find the offers and return a list of them as objects', function() {
    const data = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml">  <head>    <meta name="HandheldFriendly" content="true" />    <meta name="viewport" content="width=device-width, initial-scale=1.0" />    <meta name="format-detection" content="telephone=no">    <meta name="description" content="Netverð - Skemmtum okkur innanlands með Flugfélagi Íslands. Taktu flugið til Reykjavíkur, Akureyrar, Ísafjarðar, Egilsstaða, Vopnafjarðar, Þórshafnar og Grímseyjar. Fljúgðu til einhverra af fimm áfangastöðum Flugfélagsins í Grænlandi eða fljúgðu til Færeyja með Flugfélagi Íslands." />    <meta name="keywords" content="Netverð,Innanlandsflug, Reykjavík, Akureyri, Ísafjörður, Egilsstaðir, Vopnafjörður, Grímsey, Þórshöfn, Færeyjar, Grænland, Nuuk, Kulusuk, Narsarsuaq, Ilulissat, Ittoqqortoormiit." />    <meta name="title" content="AirIceland - Netverð" />    <script type="text/javascript" src="/scripts/combined_583EBBA571BE03300D430C9F3DE4FDCB.js"></script>    <link rel="stylesheet" type="text/css" href="/styles/combined_9673AE875E93872750EEFA50951A7F1D.css" />    <title>      Flugfélag Íslands - Netverð    </title>  </head>  <body class="flightFarePage">    <div id="MainWrapper">    <div id="MainContent">    <div id="MainContent-Middle-CMS">      <div style="clear:both"></div>      <div class="fare-list-top-content">        <h1>NETVER&ETH;</h1>        <p>H&eacute;r getur &thorn;&uacute; b&oacute;ka&eth; netver&eth; pr. fluglegg. Athuga&eth;u a&eth; til &thorn;ess a&eth; b&oacute;ka fer&eth; fram og tilbaka og fyrir fleiri en einn &thorn;arftu a&eth; fara &iacute; gegnum b&oacute;kunarv&eacute;lina h&eacute;r til hli&eth;ar.</p>        <p>Listinn uppf&aelig;rist &aacute; 15 m&iacute;n&uacute;tna fresti.</p>      </div>      <div class="fare-list-controls">        <a class="next-link" href="/nettilbod?currency=ISK&departureAirport=RKV&destinationAirport=EGS&fareclasslimitations=U,E,S,T,T1,T2">Næsti áfangastaður</a>      </div>      <div class="fare-list-table-header">        Reykjavík (RKV) - Akureyri (AEY)      </div>      <div class="fare-list-table-container">        <table class="fare-list-table">          <tr>            <td>Áfangastaður</td>            <td>Dagsetning</td>            <td>Tími</td>            <td>Verð</td>            <td>Bóka</td>          </tr>          <tr class="fare-list-table-row odd">            <td>              Akureyri (AEY)            </td>            <td>              15.7.2015            </td>            <td>              14:00            </td>            <td>              12400 ISK            </td>            <td><a href="/flight/search?interline=false&fromCityCode=RKV&toCityCode=AEY&departureDateString=2015-07-15&returnDateString=2015-07-29&adults=1&children=0&infants=0&roundTrip=false&useFlexDates=false&allInclusive=undefined&promocode=&fareTypeCategory=1&currency=ISK">Bóka flug</a></td>          </tr>          <tr class="fare-list-table-row even">            <td>              Akureyri (AEY)            </td>            <td>              15.7.2015            </td>            <td>              17:30            </td>            <td>              12400 ISK            </td>            <td><a href="/flight/search?interline=false&fromCityCode=RKV&toCityCode=AEY&departureDateString=2015-07-15&returnDateString=2015-07-29&adults=1&children=0&infants=0&roundTrip=false&useFlexDates=false&allInclusive=undefined&promocode=&fareTypeCategory=1&currency=ISK">Bóka flug</a></td>          </tr>          <tr class="fare-list-table-row odd">            <td>              Akureyri (AEY)            </td>            <td>              15.7.2015            </td>            <td>              20:00            </td>            <td>              9700 ISK            </td>            <td><a href="/flight/search?interline=false&fromCityCode=RKV&toCityCode=AEY&departureDateString=2015-07-15&returnDateString=2015-07-29&adults=1&children=0&infants=0&roundTrip=false&useFlexDates=false&allInclusive=undefined&promocode=&fareTypeCategory=1&currency=ISK">Bóka flug</a></td>          </tr>        </table>      </div>      <div class="fare-list-table-header second">        Akureyri (AEY) - Reykjavík (RKV)      </div>      <div class="fare-list-table-container">        <table class="fare-list-table">          <tr>            <td>Áfangastaður</td>            <td>Dagsetning</td>            <td>Tími</td>            <td>Verð</td>            <td>Bóka</td>          </tr>          <tr class="fare-list-table-row odd">            <td>Reykjavík (RKV)</td>            <td>16.7.2015</td>            <td>09:40</td>            <td>11700 ISK</td>            <td><a href="/flight/search?interline=false&fromCityCode=AEY&toCityCode=RKV&departureDateString=2015-07-16&returnDateString=2015-07-30&adults=1&children=0&infants=0&roundTrip=false&useFlexDates=false&allInclusive=undefined&promocode=&fareTypeCategory=1&currency=ISK">Bóka flug</a></td>          </tr>          <tr class="fare-list-table-row even">            <td>              Reykjavík (RKV)            </td>            <td>              16.7.2015            </td>            <td>              18:20            </td>            <td>              12000 ISK            </td>            <td><a href="/flight/search?interline=false&fromCityCode=AEY&toCityCode=RKV&departureDateString=2015-07-16&returnDateString=2015-07-30&adults=1&children=0&infants=0&roundTrip=false&useFlexDates=false&allInclusive=undefined&promocode=&fareTypeCategory=1&currency=ISK">Bóka flug</a></td>          </tr>          <tr class="fare-list-table-row odd">            <td>              Reykjavík (RKV)            </td>            <td>              16.7.2015            </td>            <td>              21:10            </td>            <td>              12000 ISK            </td>            <td><a href="/flight/search?interline=false&fromCityCode=AEY&toCityCode=RKV&departureDateString=2015-07-16&returnDateString=2015-07-30&adults=1&children=0&infants=0&roundTrip=false&useFlexDates=false&allInclusive=undefined&promocode=&fareTypeCategory=1&currency=ISK">Bóka flug</a></td>          </tr>          <tr class="fare-list-table-row even">            <td>              Reykjavík (RKV)            </td>            <td>              17.7.2015            </td>            <td>              21:10            </td>            <td>              12400 ISK            </td>            <td><a href="/flight/search?interline=false&fromCityCode=AEY&toCityCode=RKV&departureDateString=2015-07-17&returnDateString=2015-07-31&adults=1&children=0&infants=0&roundTrip=false&useFlexDates=false&allInclusive=undefined&promocode=&fareTypeCategory=1&currency=ISK">Bóka flug</a></td>          </tr>        </table>      </div>      <div class="fare-list-controls">        <a class="next-link" href="/nettilbod?currency=ISK&departureAirport=RKV&destinationAirport=EGS&fareclasslimitations=U,E,S,T,T1,T2">Næsti áfangastaður</a>      </div>    </div>  </body></html>';
    const expectedObject = [
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
      {
        route: 'Akureyri (AEY) - Reykjavík (RKV)',
        date: '16.7.2015',
        time: '09:40',
        price: '11700 ISK',
        link: '/flight/search?interline=false&fromCityCode=AEY&toCityCode=RKV&departureDateString=2015-07-16&returnDateString=2015-07-30&adults=1&children=0&infants=0&roundTrip=false&useFlexDates=false&allInclusive=undefined&promocode=&fareTypeCategory=1&currency=ISK',
      },
      {
        route: 'Akureyri (AEY) - Reykjavík (RKV)',
        date: '16.7.2015',
        time: '18:20',
        price: '12000 ISK',
        link: '/flight/search?interline=false&fromCityCode=AEY&toCityCode=RKV&departureDateString=2015-07-16&returnDateString=2015-07-30&adults=1&children=0&infants=0&roundTrip=false&useFlexDates=false&allInclusive=undefined&promocode=&fareTypeCategory=1&currency=ISK',
      },
      {
        route: 'Akureyri (AEY) - Reykjavík (RKV)',
        date: '16.7.2015',
        time: '21:10',
        price: '12000 ISK',
        link: '/flight/search?interline=false&fromCityCode=AEY&toCityCode=RKV&departureDateString=2015-07-16&returnDateString=2015-07-30&adults=1&children=0&infants=0&roundTrip=false&useFlexDates=false&allInclusive=undefined&promocode=&fareTypeCategory=1&currency=ISK',
      },
      {
        route: 'Akureyri (AEY) - Reykjavík (RKV)',
        date: '17.7.2015',
        time: '21:10',
        price: '12400 ISK',
        link: '/flight/search?interline=false&fromCityCode=AEY&toCityCode=RKV&departureDateString=2015-07-17&returnDateString=2015-07-31&adults=1&children=0&infants=0&roundTrip=false&useFlexDates=false&allInclusive=undefined&promocode=&fareTypeCategory=1&currency=ISK',
      },
    ];
    assert.deepEqual(extractOffers(data), expectedObject);
  });
});
