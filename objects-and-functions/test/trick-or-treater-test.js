const assert = require('chai').assert;
const Costume = require('../lib/costume');
const Bag = require('../lib/bag');
const Candy = require('../lib/candy');
const TrickOrTreater = require('../lib/trick-or-treater');

describe('TrickOrTreater', function () {

  it('should be a function', function () {
    assert.isFunction(TrickOrTreater);
  });

  it('should wear a costume', function () {
    const costume = new Costume('Cowboy');
    const trickOrTreater = new TrickOrTreater(costume);
    assert.equal(trickOrTreater.dressedUpAs, 'Cowboy');
  });


  it('should wear a different costume', function () {
    const costume = new Costume('Cowboy');
    const trickOrTreater = new TrickOrTreater(costume);
    assert.equal(trickOrTreater.dressedUpAs, 'Cowboy');
  });

  it('should have an empty bag by default', function () {
    const costume = new Costume('Alien');
    const bag = new Bag();
    const trickOrTreater = new TrickOrTreater(costume, bag);
    assert.deepEqual(trickOrTreater.bag.candies, []);
  });

  it('should have a bag with no candy', function () {
    const costume = new Costume('Knight');
    const trickOrTreater = new TrickOrTreater(costume);
    assert.equal(trickOrTreater.hasCandy, false);
  });


  it.skip('should get candy', function () {
    const costume = new Costume('Spaceship Mechanic');
    const bag = new Bag();
    const trickOrTreater = new TrickOrTreater(costume, bag);
    const candy = new Candy('Gummy Bears');
    trickOrTreater.putCandyInBag(candy);
    assert.equal(trickOrTreater.hasCandy, true);
  });


  it.skip('should add new candy into bag', function () {
    const costume = new Costume('Zombie');
    const bag = new Bag();
    const trickOrTreater = new TrickOrTreater(costume, bag);
    const candy = new Candy('Skittles');
    trickOrTreater.putCandyInBag(candy);
    assert.equal(trickOrTreater.bag.candies.length, 1);
  });


  it.skip('should count candies', function () {
    const costume = new Costume('Spaceship Mechanic');
    const bag = new Bag();
    const trickOrTreater = new TrickOrTreater(costume, bag);
    const candy = new Candy('Gummy Bears');
    assert.equal(trickOrTreater.countCandies, 0);
    assert.equal(trickOrTreater.bag.count, trickOrTreater.countCandies)
    trickOrTreater.putCandyInBag(candy);
    assert.equal(trickOrTreater.countCandies, 1);
    assert.equal(trickOrTreater.bag.count, trickOrTreater.countCandies)
  });

  it.skip('should eat candies', function () {
    const costume = new Costume('Spaceship Mechanic');
    const bag = new Bag();
    const trickOrTreater = new TrickOrTreater(costume, bag);
    const candy1 = new Candy('Gummy Bears');
    const candy2 = new Candy('Liquorice');
    const candy3 = new Candy('Salty Serpents');
    trickOrTreater.putCandyInBag(candy1);
    trickOrTreater.putCandyInBag(candy2);
    trickOrTreater.putCandyInBag(candy3);
    assert.equal(trickOrTreater.countCandies, 3);
    trickOrTreater.eat();
    trickOrTreater.eat();
    trickOrTreater.eat();
    assert.equal(trickOrTreater.countCandies, 0);
  });

  it.skip('should have an empty bag after eating candies', function () {
    const costume = new Costume('Spaceship Mechanic');
    const bag = new Bag();
    const trickOrTreater = new TrickOrTreater(costume, bag);
    const candy1 = new Candy('Gummy Bears');
    const candy2 = new Candy('Liquorice');
    const candy3 = new Candy('Salty Serpents');
    trickOrTreater.putCandyInBag(candy1);
    trickOrTreater.putCandyInBag(candy2);
    trickOrTreater.putCandyInBag(candy3);
    assert.equal(trickOrTreater.bag.candies.length, 3);
    trickOrTreater.eat();
    trickOrTreater.eat();
    trickOrTreater.eat();
    assert.equal(trickOrTreater.bag.candies.length, 0);
  });
});
