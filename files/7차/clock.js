const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.seconds();
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`
}

function init(){
  
}

init();

// in the making of getTime()
//in console you 
// const date = new Date()
// date
// date.getDate()
// date.getHours()
// date.getMinutes()
