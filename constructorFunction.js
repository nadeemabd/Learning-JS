function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.greet = function (name) {
      return "Hello, " + name + ". My name is " + firstName;
    };
}

var obj = createPerson("John", "Doe");
var obj2 = createPerson("Joe", "Smith");

console.log(obj.greet("Jane"));
console.log(obj2.greet("Jane2"));
