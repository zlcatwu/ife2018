function Restaurant({ cash, seats, staff }) {
  this.cash = cash;
  this.seats = seats;
  this.staff = staff;

  this.hire = function(employee) {
    if (this.staff.indexOf(employee) !== -1) {
      throw new Error('该员工已被雇佣');
    }
    this.staff.push(employee);
  }

  this.fire = function(employee) {
    const idx = this.staff.indexOf(employee);
    if (idx === -1) {
      throw new Error('该员工没有被雇佣');
    }
    this.staff.splice(idx, 1);
  }
}

function Employee({ name, salary }) {
  this.id = Employee.uid++;
  this.name = name;
  this.salary = salary;

  this.work = function(params) {
    throw new Error('抽象函数不能被调用');
  }
}
Employee.uid = 0;

function Cook(name, salary) {
  Employee.call(this, { name, salary });

  this.work = function(params) {
  }
}

// 测试代码
const ifeRestaurant = new Restaurant({
  cash: 1000000,
  seats: 20,
  staff: []
});

const newCook = new Cook("Tony", 10000);
ifeRestaurant.hire(newCook);

console.log(ifeRestaurant.staff);

ifeRestaurant.fire(newCook);
console.log(ifeRestaurant.staff);
