import { rand } from "./utils";

export default function Customer(name) {
  this.name = name;
  this.resturant = null;
}

Customer.prototype.enter = function(resturant) {
  this.resturant = resturant;
}

Customer.prototype.order = function(menu) {
  const idx = rand(0, menu.length - 1);
  console.log(`顾客 ${this.name} 点了 ${menu[idx].name}`);
  return menu[idx];
}

Customer.prototype.eat = function(dish) {
  console.log(`顾客 ${this.name} 吃了 ${dish.name}`);
  this.resturant.onExit(this);
}
