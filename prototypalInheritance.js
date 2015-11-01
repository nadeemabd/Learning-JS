function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

Person.prototype.greet = function(name) {
  return "Hello, " + name + ". My name is " + this.getFullName();
};

function Employee(firstName, lastName, position) {
  Person.call(this, firstName, lastName);
  this.position = position;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.greet = function (name) {
  return Person.prototype.greet.call(this, name) + ", " + this.position;
};

var john = new Person("John", "Doe");
var jim = new Employee("Jim", "Smith", "Manager");

console.log(jim.greet("Jane"));
