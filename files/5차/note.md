Video no.1
===
### 1
~~~javascript
const title = document.getElementById("title");
title.innerHTML = "Hello from JS";
console.log(title);
~~~
### 2 change title
~~~javascript
title.style.color = "blue";
~~~
### 3 same thing with document
you can check objects on browser
~~~javascript
document.title = "I modified you";
~~~
this is how you can modify website
~~~javascript
const title = document.querySelector(".title");
~~~
find a selector with this
does not exist. This show you how to find the attibutes

Video no.2
===
what is an "Event"
we intercept an event. JS can
ex. windows -> 
widnow.addEventListener();
form -> event called submit
resize -> (,function that handles the event)
### A
~~~javascript
const title = document.querySelector("#title");

function handleResize(){
  console.log("I have been resized");
}

widnow.addEventListener("resize", handleResize);
~~~
not handleResize() -> because this expression calls the function inmediately, right away

-> whenever you make a function that will handle ???

### B
~~~javascript
const title = document.querySelector("#title");
function handleResize(event){
  console.log(event");
}

widnow.addEventListener("resize", handleResize);
~~~
display the resize object that was fired
will be useful when we are making a form or click on link, etc.

### C
~~~javascript
const title = document.querySelector("#title");
function handleClick(){
  title.style.color("green");
}

title.addEventListener("click", handleClick);
~~~
when click then stay blue, can not remove.

next will add if else statement
