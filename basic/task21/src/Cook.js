import Employee from './Employee';
import Waiter from './Waiter';

export default function Cook(name, salary) {
  Employee.call(this, { name, salary });
}

Cook.getInstance = (function() {
  let instance = null;
  return function(name, salary) {
    if (instance === null) {
      instance = new Cook(name, salary);
    }
    return instance;
  }
}());
Cook.prototype = Object.create(Employee.prototype);
Cook.prototype.constructor = Cook;

Cook.prototype.cook = function(dish, customer) {
  console.log(`厨子 ${this.name} 为 ${customer.name} 做 ${dish.name}`);
  Waiter.getInstance().sendDish(dish, customer);
}
