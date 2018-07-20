export default class Employee {
  constructor({ name, salary }) {
    this.id = Employee.uid++;
    this.name = name;
    this.salary = salary;
  }

  work(params) {
    throw new Error('抽象函数不能被调用');
  }
}
Employee.uid = 0;
