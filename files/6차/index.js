///Video 1

CONDITIONS(if else)

///Structure of 'if'
if(condition){
  block;
} else {
  block;
}

//Example 1
if(10>5){
  console.log("more");
}else{
  console.log("not more");
}

//Example 2
if(10 === 5){
  console.log("more");
}else{
  console.log("not more");
}
//command "===" means is checking
// if first condition is not true then it goes to the else block

//Example 3
if(10 === "10"){
  console.log("equal");
}else{
  console.log("not equal");
}
// here "10" expression is a string, so its not equal

//you can do more than one condition
//Example 3
if(10 === "10"){
  console.log("equal");
}else if("10" === "10"){
  console.log("both strings");
}else{
  console.log("nothing alike");
}

// "&&" command "AND"
//combine different conditions
if(20 > 5 && "jorge" === "jorge"){
  console.log("yes");
} else {
  console.log("no");
}
// here if one of them is false then it goes to else
// both of them or none of them

// "||" command "OR"
// either one or the other
if(20 > 5 || "jorge" === "jorge"){
  console.log("yes");
} else {
  console.log("no");
}
// if one the expression is true then it is going to say "yes"
// then we have that

// AND
true && true = true;
false && true = false;
true && false = false;
false && false = false;

// OR
true || true = true;
false || true = true;
true || false = true;
false || false = false;


// ask the user for his age and we are going to check if they can drink alcohol

const age = prompt("How old are you?");

console.log(age);

// then consturct

if(age >18){
  console.log("you can drink");
} else {
  console.log("you can NOT drink");
}

//ex 2
if(age >= 18 && age <= 21){
  console.log("you can but you should not");
} else if(age > 21){
  console.log("go ahead");
} else {
  console.log("You are too young");
}

///VIDEO 2
///Change colors
const title = document.querySelector("#title");

const BASE_COLOR = rgb(53,73,94);

const OTHER_COLOR = "#7f8c8d";
// get current color that they have with the click
function handleClick(){
  const currentColor = title.style.color;
  //console.log(currentColor);
  if (currentColor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init(){
  title.style.color=BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();
//lets check another event
// always use MDN
//https://developer.mozilla.org/en-US/docs/Web/Events
function handleOffline(){
  console.log("test offline event");
}
window.addEventListener("offline", handleOffline);

function handleOnline(){
  console.log("test online event");
}
window.addEventListener("online", handleOnline);


