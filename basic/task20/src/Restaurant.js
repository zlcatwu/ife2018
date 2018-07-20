export default class Restaurant {
  constructor({ cash, seats, staff }) {
    this.cash = cash;
    this.seats = seats;
    this.staff = staff;
  }

  hire(employee) {
    if (this.staff.indexOf(employee) !== -1) {
      throw new Error('该员工已被雇佣');
    }
    this.staff.push(employee);
  }

  fire(employee) {
    const idx = this.staff.indexOf(employee);
    if (idx === -1) {
      throw new Error('该员工没有被雇佣');
    }
    this.staff.splice(idx, 1);
  }
}
