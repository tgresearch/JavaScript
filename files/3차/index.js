###DATATYPES
/** Video #1 **/

##OBJECTS
//you can name this values but like the next expression
const jorgeInfo =  ["Kim","Park","29", true,"Seoul"];
//top declare and object you use "{}"
const jorgeInfo = {
  name: "Jorge",
  age: 27,
  gender:"Male"
}
//access info with "." like ...
console.log(jorgeInfo.gender);
//change info inside object with ...
jorgeInfo.gender="Non-show";
console.log(jorgeInfo);
//Combine array and object
const jorgeInfo = {
  favMovies: ["Ready Player One", "The Matrix", "Never Ending Story"],
  favFood:[
    {
      name:"Burger", 
      fatcont:true
    },
    {
      name:"Pizza",
      fatcont:true
    }
  ]
}
console.log(jorgeInfo);
// object inside of array inde and object

//Do not forget coma ',' in the right place
//remember read errors on google chrome console

/** Video #2 **/

const jorgeInfo = {
  name: "Jorge",
  age: 27,
  gender:"Male"
}
console.log(jorgeInfo.gender);
// display 2 objects -> console is also object, is a built in function
console.log(jorgeInfo, console);
//how to put code that calls and say hello
console.log("Hello");
console.log("Hello"+" "+"Park");

##FUNCTIONS
//eficient way to use we make a function
//declare a function
function sayHello(){
  console.log("Hello");
}
//call function
sayHello();
//hello to friends

function sayHello(potatoe){
  console.log("Hello", potatoe);
}

sayHello("Jorge");
console.log("HI");
//lets add
sayHello("Jorge",15);
//but it does not add it cause function is not prepared for another variable number
//lets add another 

function sayHello(name, age){
  console.log('Hello!', name, " you are ", age, " years old.");
}

sayHello("Jorge", 21);








