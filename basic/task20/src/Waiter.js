import Employee from './Employee';

export default class Waiter extends Employee {
  constructor(name, salary) {
    super({ name, salary });
  }

  work(params) {
    if (Array.isArray(params)) {
      this.order(params);    
    } else {
      this.serve();
    }
  }

  order(list) {
  }

  serve(dish) {
  }
}
