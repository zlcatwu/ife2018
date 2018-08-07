import Restaurant from './Restaurant';
import Cook from './Cook';
import Waiter from './Waiter';
import Employee from './Employee';
import Customer from './Customer';
import { rand } from './utils';
import Dish from './Dish';

const menu = [];
menu.push(new Dish({ name: '京酱肉丝', cost: 1, price: 10 }));
menu.push(new Dish({ name: '米饭', cost: 5, price: 20 }));
menu.push(new Dish({ name: '番茄炒蛋', cost: 10, price: 30 }));
const res = new Restaurant({ cash: 10000, seats: 1, staff: [], menu });
res.hire(Cook.getInstance('李大嘴', 1000));
res.hire(Waiter.getInstance('白展堂', 1000));

res.enter(new Customer('老邢'));
res.enter(new Customer('燕小六'));
res.enter(new Customer('李大娘'));
