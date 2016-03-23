var kiwi = require("kiwi");


var items = [
    {name: "water",
      price: 0.50},
    {name: "crisps",
      price: 0.50}
  ];

var calcTotal = function(){
  var runningTotal = 0;
  for (item of this.items) {
    runningTotal += item.price;
  };
  this.total = runningTotal;
  return runningTotal;
};

var removeItem = function(itemName){
  if (itemName === undefined){
    return false;
  };
  var index = this.items.indexOf(Kiwi.compose("%{name}", {"name": itemName}));
  itemRemoved = {name: itemName, price: this.items[index].price};
  this.items.splice(index, 1);
  return itemRemoved;
};

var addItem = function(itemName, itemPrice){
  itemToAdd = {name: itemName, price: itemPrice};
  this.items.push(itemToAdd);
  return itemToAdd;
};

var checkDiscountBulk = function(){
  if (this.total > 20){
    this.discountBulk = true;
    return true;
  } // can I put semicolon here? will it ignore the else statement part of the if statement? I'm 55% sure that it would...
  else{
    return false;
  };
};

var checkDiscountCard = function(){
  // (this.discountCard === true) ? return true : return false;
  // ^^^ check how ternary works - is the return keyword the problem, or my ternary syntax?
  if (this.discountCard === true){
    return true;
  } // can I put semicolon here? will it ignore the else statement part of the if statement? I'm 55% sure that it would...
  else{
    return false;
  };
};

var setDiscountMultiplier = function(){
  this.discountMultiplier = 1;
  var discount = 0;
  if (this.checkDiscountCard()){
    discount += 0.05;
  };
  if (this.checkDiscountBulk()){
    discount += 0.1;
  };
  this.discountMultiplier -= discount;
  return discount;
};

var calcFinalCost = function(){
  var fullPriceBasket = this.calcTotal();
  this.setDiscountMultiplier();
  finalCost = fullPriceBasket * this.discountMultiplier;
  this.cost = finalCost;
  return finalCost;
};

var basket = {
  total: 0,
  discountCard: true,
  discountBulk: false,
  discountMultiplier: 1,
  cost: 0,
  items: items,
  calcTotal: calcTotal,
  removeItem: removeItem,
  addItem: addItem,
  checkDiscountCard: checkDiscountCard,
  checkDiscountBulk: checkDiscountBulk,
  setDiscountMultiplier: setDiscountMultiplier,
  calcFinalCost: calcFinalCost
};
// -?- which of the key and value of an object method is the name used to call the method?
// -- I think it's the key in the object, the value of which is a function (or var containing a function) - that function is anonymous so I think the function call is the key in the object where the function is stored.





module.exports = basket;
