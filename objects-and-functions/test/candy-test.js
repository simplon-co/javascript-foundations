let assert = require('chai').assert;
let Candy = require('../lib/candy');

describe('Candy', function () {

  it('should be a function', function () {
    assert.isFunction(Candy);
  });

  it('should have a type', function () {
    let candy = new Candy('Skittles');
    assert.equal(candy.type, 'Skittles');
  });

  it('should have another candy type', function () {
    let candy = new Candy('Mars');
    assert.equal(candy.type, 'Mars');
  });
});
