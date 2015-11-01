var Person = (function() {
  var firstNameSymbol = Symbol();
  var lastNameSymbol = Symbol();


  function Person(firstName, lastName) {
    this[firstNameSymbol] = firstName;
    this[lastNameSymbol] = lastName;
  }

  Person.prototype.greet = function(name) {
    return "Hello, " + name + ". My name is " + this[firstNameSymbol];
  };

  Object.defineProperty(Person.prototype,"firstName",{
    get: function () { return this[firstNameSymbol]; }
  });

  Object.defineProperty(Person.prototype,"lastName",{
    get: function () { return this[lastNameSymbol]; }
  });

  return Person;

}());

var obj = new Person("John", "Doe");
var obj2 = new Person("Joe", "Smith");

console.log(obj.greet("Jane"));
console.log(obj2.greet("Jane2"));

console.log(obj.greet());

console.log(obj.greet === obj2.greet);

console.log(obj instanceof Person);
