import Employee from './Employee';

export default class Cook extends Employee {
  constructor(name, salary) {
    super({ name, salary });
  }

  work(params) {
  }
}
