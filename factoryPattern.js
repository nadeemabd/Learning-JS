function createPerson(firstName, lastName) {
    var person = {

        get firstName() {
            return firstName;
        },
        get lastName() {
            return lastName;
        },
        greet: function (name) {
            return "Hello, " + name + ". I am " + firstName + " " + lastName;
        }
    };

    return person;
}

var obj = createPerson("John", "Doe");
var obj2 = createPerson("Joe", "Smith");

console.log(obj.greet("Jane"));
console.log(obj2.greet("Jane2"));