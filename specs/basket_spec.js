var assert = require("chai").assert;
var basket = require("../basket.js");

describe("Basket", function(){
  it("should have total attribute", function(){
    assert.equal(0, basket.total);
  });
  it("should apply discount card, but not bulk discount, to cart value of 1.00", function(){
    assert.equal(0.95, basket.calcFinalCost());
  });
  it("should be able to remove items", function(){
    var beforeCount = basket.items.length;
    basket.removeItem("water");
    var afterCount = basket.items.length;
    assert.equal(beforeCount-1, afterCount);
  });
  it("should be able to add items", function(){
    basket.addItem("casio watch", 21.99);
    assert.deepEqual({name: "casio watch", price: 21.99 }, basket.items[basket.items.length -1]);
  });
  // it("should apply bulk discount", function(){
  //   assert.equal(expected, actual);
  // });

});