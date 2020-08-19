const sayHello = function (name) {
  console.log("hello " + name);
}

sayHello('John');


const returnSayHello = function (name) {

  return "Hello, " + name;
}

const greeting = returnSayHello('John');

console.log(greeting);

