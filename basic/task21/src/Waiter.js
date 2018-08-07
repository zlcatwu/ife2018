import Employee from './Employee';
import Cook from './Cook';

export default function Waiter(name, salary) {
  Employee.call(this, { name, salary });
}

Waiter.prototype = Object.create(Employee.prototype);
Waiter.prototype.constructor = Waiter;
Waiter.getInstance = (function() {
  let instance = null;
  return function(name, salary) {
    if (instance === null) {
      instance = new Waiter(name, salary);
    }
    return instance;
  }
}());

Waiter.prototype.getOrder = function(customer, menu) {
  console.log(`服务员 ${this.name} 为 ${customer.name} 进行点餐服务`);
  const dish = customer.order(menu);
  const cook = Cook.getInstance();
  console.log(`服务员 ${this.name} 通知 ${cook.name} 为 ${customer.name} 做 ${dish.name}`);
  cook.cook(dish, customer);
}

Waiter.prototype.sendDish = function(dish, customer) {
  console.log(`服务员 ${this.name} 为 ${customer.name} 送 ${dish.name}`);
  customer.eat(dish);
}
