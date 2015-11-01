function createPerson(firstName, lastName) {
    var person = {

        get firstName() {
            return firstName;
        },
        get lastName() {
            return lastName;
        },
        greet: function (name) {
            return "Hello, " + name + ". I am " + this.fullName;
        }
    };

    Object.defineProperty(person, "fullName",{
      get: function () { return this.firstName + " " + this.lastName; },
      configurable: true
    });

    return person;
}

function createEmployee(firstName, lastName, position) {
  var person = createPerson(firstName,lastName);
  // var personGreet = person.greet;
  var getFullNameDescriptor = Object.getOwnPropertyDescriptor(person, "fullName");
  var fullNameGet = getFullNameDescriptor.get.bind(person);

  Object.defineProperty(person, "position", {
    get: function () { return position; }
  });

  Object.defineProperty(person,"fullName",{
    get: function () { return fullNameGet() + ", " + this.position; }
  });

  // person.greet = function (name) {
  //   return personGreet(name) + ", " + this.position;
  // };

  return person;
}

var jonh = createEmployee("Jonh", "Doe", "Manager");
var jim = createEmployee("Jim", "Smith", "Salesman");

console.log(jonh.greet("Jane"));
console.log(jim.greet("Jane"));
