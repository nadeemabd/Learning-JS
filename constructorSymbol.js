(function() {
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function (name) {
return "Hello, " + name + ". My name is " + this.firstName;
};
}());

var obj = new Person("John", "Doe");
var obj2 = new Person("Joe", "Smith");

console.log(obj.greet("Jane"));
console.log(obj2.greet("Jane2"));

console.log(obj.greet());

console.log(obj.greet === obj2.greet);
