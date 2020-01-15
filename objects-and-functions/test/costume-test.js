const assert = require('chai').assert;
const Costume = require('../lib/costume');

describe('Costume', function () {

  it('should be a function', function () {
    assert.isFunction(Costume);
  });

  it('should have a style', function () {
    const costume = new Costume('Batman');
    assert.equal(costume.style, 'Batman');
  });

  it('should have another style of costume', function() {
    const costume = new Costume('Princess');
    assert.equal(costume.style, 'Princess');
  });
});
