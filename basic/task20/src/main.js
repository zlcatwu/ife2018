import Restaurant from './Restaurant';
import Cook from './Cook';

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
