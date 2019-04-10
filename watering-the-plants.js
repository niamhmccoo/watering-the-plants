//FERN:

// Core types in JavaScript

// "Hello" // String
// 2 // Number
// (n) => n + 2 // function
// [5,2] // Array
// {"name": "Francis", "age": 222} // Object
// null // null
// undefined // undefined
// true // boolean

// New types in ECMAScript 6 (ignore for now but investigate later)
// https://hacks.mozilla.org/category/es6-in-depth/

// Map
// Set
// Symbol

// Time stuff:
function currentTime() {
  let dateAsObject = new Date();
  let dateInMs = dateAsObject - 0;
  let dateInS = dateInMs / 1000;
  return Math.round(dateInS);
}

function formatTimeAgo(timeInS) {
  let secondsOnly = timeInS % 60;
  let timeInM = (timeInS - secondsOnly) / 60;
  let minutesOnly = timeInM % 60;
  let timeInH = (timeInM - minutesOnly) / 60;
  let hoursOnly = timeInH % 24;
  let timeInD = (timeInH - hoursOnly) / 24;
  return `${timeInD}d ${timeInH}h ${minutesOnly}m ${secondsOnly}s ago`;
}

// Button stuff:

let now = currentTime();

function buttonPressed(event) {
// event.target gets the button you lastClicked - use this to reset the timers using the dataset.id
  localStorage.setItem(event.target.dataset.id, currentTime());
}

function refreshPlant(lastwatered, date) {
  let lastClicked = localStorage.getItem(lastwatered);
  if (lastClicked === null) {
    document.querySelector(date).innerHTML = 'Never';
  } else {
    let now = currentTime();
    let howManySecondsAgo = now - lastClicked;
    console.log(lastwatered, howManySecondsAgo);
    document.querySelector(date).innerHTML = formatTimeAgo(howManySecondsAgo);
  }
}

function refreshPage(){
  refreshPlant("fern-last-watered", "#fern-date")
  refreshPlant("cactus-last-watered", "#cactus-date")
  refreshPlant("succulent-last-watered", "#succulent-date")
  refreshPlant("hoya-last-watered", "#hoya-date")
  refreshPlant("asparagusfern-last-watered", "#asparagusfern-date")
}

// STEP 1

// Write a refresh function that takes a plant name (string?) and refreshes it in local storage etc (like above)
// Change refreshPage function to call the single function five times with different parameters
// TOP TIP! Find the things that remain the same and the things that change in the functions above
// Everything that changes needs to be a parameter, everything else can stay the same.

// Step 2

// Write a function that loops over all plants (find something they have in common)
// and calls the refresh function for them

// function refreshPage() {
//   asparagusFernRefreshPage();
//   hoyaRefreshPage();
//   succulentRefreshPage();
//   cactusRefreshPage();
//   fernRefreshPage();
// }

  document.querySelectorAll('button').forEach(function(element) {
    element.onclick = buttonPressed;
  });

setInterval(refreshPage, 1000);
