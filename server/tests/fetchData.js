'use strict';

const assert = require('assert');
const fetchData = require('../fetchData');

describe('fetchData', function() {
  // A bit naive, but may improve in the future
  it('should be a function', function() {
    assert.equal(typeof fetchData, 'function');
  });
  it('should return a promise', function() {
    return fetchData();
  });
});
