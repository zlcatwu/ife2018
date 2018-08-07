export default function Employee({ name, salary }) {
  this.id = Employee.uid++;
  this.name = name;
  this.salary = salary;
}

Employee.uid = 0;
