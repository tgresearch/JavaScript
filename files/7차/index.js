/* Video #1 */
##1

const title = document.querySelector("#title");

const clicked_class = "clicked";

function handleClick(){
  const currentClass = title.className;
  //console.log(currentClass);
  if(currentClass !== clicked_class){
    title.className = clicked_class;
  } else {
    title.className = "";
  }
}

function init(){
  title.addEventListener("click",handleClick);
}
init();

/// but then we realize that the class is not letting other class and functions work
/// go to DMN again to check references
///try to find a <div>
///https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement
///then check html propersties to find "classNAme"
/// https://developer.mozilla.org/en-US/docs/Web/API/Element/className
/// then we realize we want to use "classList" isntead because it has methods
/// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
/// because we need to check for more than one class then we also do "contains"
/// constains check if the value exist

##2

const title = document.querySelector("#title");

const clicked_class = "clicked";

function handleClick(){
//  const hasClass = title.classList.contains(clicked_class);
//  if(!hasClass){
//    title.classList.add(clicked_class);
//  } else {
//    title.classList.remove(clicked_class);
//  }
  /// we are going to use toggle instead to encapsulate all we previously did here
  title.classList.toggle(clicked_class);
}

function init(){
  title.addEventListener("click",handleClick);
}
init();

/* Video #2 */
//get photos for screen watch time -> from unsplash
