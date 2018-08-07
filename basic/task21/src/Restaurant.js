import Waiter from "./Waiter";

export default function Restaurant({ cash = 0, seats = 0, staff = [], menu = [] }) {
  this.cash = cash;
  this.seats = seats;
  this.staff = staff;
  this.menu = menu;
  this._queue = [];
  this._serving = [];
}

Restaurant.prototype.hire = function(employee) {
  if (this.staff.map((s) => s.id).indexOf(employee.id) !== -1) {
    throw new Error('该员工已被雇佣');
  }
  this.staff.push(employee);
}

Restaurant.prototype.fire = function(employee) {
  const idx = this.staff.map((s) => s.id).indexOf(employee.id);
  if (idx === -1) {
    throw new Error('该员工没有被雇佣');
  }
  this.staff.splice(idx, 1);
}

Restaurant.prototype.enter = function(customer) {
  console.log(`顾客 ${customer.name} 进入了饭店`);
  customer.enter(this);
  if (this._serving.length < this.seats) {
    this._serving.push(customer);
    setTimeout(() => {
      this.onServe(customer);
    }, 0);
  } else {
    console.log(`顾客 ${customer.name} 开始排队`);
    this._queue.push(customer);
  }
}

Restaurant.prototype.onServe = function(customer) {
  console.log(`顾客 ${customer.name} 找到了座位`);
  const waiter = this.staff.filter((e) => e instanceof Waiter)[0];
  const dish = waiter.getOrder(customer, this.menu);
}

Restaurant.prototype.onExit = function(customer) {
  console.log(`顾客 ${customer.name} 离开了饭店`);
  this._serving = [];
  if (this._queue.length) {
    this.onServe(this._queue.shift());
  }
}
