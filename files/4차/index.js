/** Video #1 **/
//check
console.log(document);
//gives html document via JS

const title = document.getElementById("title");

console.log(title);
//then we want to change something

//DOM - document object model
//take elements and turn them into objects

title.innerHTML = "Hi!";

//then you change the html
// originally it said "Jorge" but replaced by "Hi!"
//you can change how DOM look like

/** Video #2 **/
//Use `` , '' and ""
function sayHello(name, yts){
  console.log(`Hello ${name} you are ${yts} away from success`);
}

sayHello("Jorge",25);

//
const greetJorge = sayHello("Jorge", yts);

console.log(greetJorge);

//
const calculator = {
  plus: function(a,b){
    return a+b;
  },
  minus: function(a,b){
    return a-b;
  },
  multiply: function(a,b){
    return a*b;
  },
  power: function(a,b){
    return a**b;
  },
}

// plus
const plus = calculator.plus(5,5);
console.log(plus)

// multiply
const multiply = calculator.multiply(5,5);
console.log(multiply)

// minus
const minus = calculator.minus(5,5);
console.log(minus)

// power
const power = calculator.power(5,5);
console.log(power)


