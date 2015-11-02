// function foo(a) {
//   console.log(b);
//   console.log(a + b);
//   b = a ;
// }
//
// foo(2);

// var b = 2;

// function foo(str, a) {
//   // eval(str);
//   console.log(a, b);
// }
//
// var b = 2;
//
// foo("var b = 3", 4);

function foo() {
  console.log(a);
}

function bar() {
  var a = 3;
  foo();
}

var a = 2;

bar();
