//FERN:

function ferncurrentTimeInSecondsFrom01Jan1970() {
  let dateAsObject = new Date();
  let dateInMs = dateAsObject - 0;
  let dateInS = dateInMs / 1000;
  return Math.round(dateInS);
}

function fernbuttonPressed() {
  let now = ferncurrentTimeInSecondsFrom01Jan1970();
  localStorage.setItem('fern-last-watered', now);
}

document.querySelector('#fern-button').addEventListener('click', fernbuttonPressed);

function fernformatTimeAgo(timeInS) {
  let secondsOnly = timeInS % 60;
  let timeInM = (timeInS - secondsOnly) / 60;
  let minutesOnly = timeInM % 60;
  let timeInH = (timeInM - minutesOnly) / 60;
  let hoursOnly = timeInH % 24;
  let timeInD = (timeInH - hoursOnly) / 24;
  return `${timeInD}d ${timeInH}h ${minutesOnly}m ${secondsOnly}s ago`;
}

function fernrefreshPage() {
  let lastClicked = localStorage.getItem('fern-last-watered');
  if (lastClicked === null) {
    document.querySelector('#fern-date').innerHTML = 'Never';
  } else {
    let now = ferncurrentTimeInSecondsFrom01Jan1970();
    let howManySecondsAgo = now - lastClicked;
    document.querySelector('#fern-date').innerHTML = fernformatTimeAgo(howManySecondsAgo);
  }
}

setInterval(fernrefreshPage, 1000);

//CACTUS:

function cactuscurrentTimeInSecondsFrom01Jan1970() {
  let dateAsObject = new Date();
  let dateInMs = dateAsObject - 0;
  let dateInS = dateInMs / 1000;
  return Math.round(dateInS);
}

function cactusbuttonPressed() {
  let now = cactuscurrentTimeInSecondsFrom01Jan1970();
  localStorage.setItem('cactus-last-watered', now);
}

document.querySelector('#cactus-button').addEventListener('click', cactusbuttonPressed);

function cactusformatTimeAgo(timeInS) {
  let secondsOnly = timeInS % 60;
  let timeInM = (timeInS - secondsOnly) / 60;
  let minutesOnly = timeInM % 60;
  let timeInH = (timeInM - minutesOnly) / 60;
  let hoursOnly = timeInH % 24;
  let timeInD = (timeInH - hoursOnly) / 24;
  return `${timeInD}d ${timeInH}h ${minutesOnly}m ${secondsOnly}s ago`;
}

function cactusrefreshPage() {
  let lastClicked = localStorage.getItem('cactus-last-watered');
  if (lastClicked === null) {
    document.querySelector('#cactus-date').innerHTML = 'Never';
  } else {
    let now = cactuscurrentTimeInSecondsFrom01Jan1970();
    let howManySecondsAgo = now - lastClicked;
    document.querySelector('#cactus-date').innerHTML = cactusformatTimeAgo(howManySecondsAgo);
  }
}

setInterval(cactusrefreshPage, 1000);

//SUCCULENT:

function succulentcurrentTimeInSecondsFrom01Jan1970() {
  let dateAsObject = new Date();
  let dateInMs = dateAsObject - 0;
  let dateInS = dateInMs / 1000;
  return Math.round(dateInS);
}

function succulentbuttonPressed() {
  let now = succulentcurrentTimeInSecondsFrom01Jan1970();
  localStorage.setItem('succulent-last-watered', now);
}

document.querySelector('#succulent-button').addEventListener('click', succulentbuttonPressed);

function succulentformatTimeAgo(timeInS) {
  let secondsOnly = timeInS % 60;
  let timeInM = (timeInS - secondsOnly) / 60;
  let minutesOnly = timeInM % 60;
  let timeInH = (timeInM - minutesOnly) / 60;
  let hoursOnly = timeInH % 24;
  let timeInD = (timeInH - hoursOnly) / 24;
  return `${timeInD}d ${timeInH}h ${minutesOnly}m ${secondsOnly}s ago`;
}

function succulentrefreshPage() {
  let lastClicked = localStorage.getItem('succulent-last-watered');
  if (lastClicked === null) {
    document.querySelector('#succulent-date').innerHTML = 'Never';
  } else {
    let now = succulentcurrentTimeInSecondsFrom01Jan1970();
    let howManySecondsAgo = now - lastClicked;
    document.querySelector('#succulent-date').innerHTML = succulentformatTimeAgo(howManySecondsAgo);
  }
}

setInterval(succulentrefreshPage, 1000);

// HOYA:

function hoyacurrentTimeInSecondsFrom01Jan1970() {
  let dateAsObject = new Date();
  let dateInMs = dateAsObject - 0;
  let dateInS = dateInMs / 1000;
  return Math.round(dateInS);
}

function hoyabuttonPressed() {
  let now = hoyacurrentTimeInSecondsFrom01Jan1970();
  localStorage.setItem('hoya-last-watered', now);
}

document.querySelector('#hoya-button').addEventListener('click', hoyabuttonPressed);

function hoyaformatTimeAgo(timeInS) {
  let secondsOnly = timeInS % 60;
  let timeInM = (timeInS - secondsOnly) / 60;
  let minutesOnly = timeInM % 60;
  let timeInH = (timeInM - minutesOnly) / 60;
  let hoursOnly = timeInH % 24;
  let timeInD = (timeInH - hoursOnly) / 24;
  return `${timeInD}d ${timeInH}h ${minutesOnly}m ${secondsOnly}s ago`;
}

function hoyarefreshPage() {
  let lastClicked = localStorage.getItem('hoya-last-watered');
  if (lastClicked === null) {
    document.querySelector('#hoya-date').innerHTML = 'Never';
  } else {
    let now = hoyacurrentTimeInSecondsFrom01Jan1970();
    let howManySecondsAgo = now - lastClicked;
    document.querySelector('#hoya-date').innerHTML = hoyaformatTimeAgo(howManySecondsAgo);
  }
}

setInterval(hoyarefreshPage, 1000);

//ASPARAGUS FERN:

function asparagusferncurrentTimeInSecondsFrom01Jan1970() {
  let dateAsObject = new Date();
  let dateInMs = dateAsObject - 0;
  let dateInS = dateInMs / 1000;
  return Math.round(dateInS);
}

function asparagusfernbuttonPressed() {
  let now = asparagusferncurrentTimeInSecondsFrom01Jan1970();
  localStorage.setItem('asparagusfern-last-watered', now);
}

document.querySelector('#asparagusfern-button').addEventListener('click', asparagusfernbuttonPressed);

function asparagusfernformatTimeAgo(timeInS) {
  let secondsOnly = timeInS % 60;
  let timeInM = (timeInS - secondsOnly) / 60;
  let minutesOnly = timeInM % 60;
  let timeInH = (timeInM - minutesOnly) / 60;
  let hoursOnly = timeInH % 24;
  let timeInD = (timeInH - hoursOnly) / 24;
  return `${timeInD}d ${timeInH}h ${minutesOnly}m ${secondsOnly}s ago`;
}

function asparagusfernrefreshPage() {
  let lastClicked = localStorage.getItem('asparagusfern-last-watered');
  if (lastClicked === null) {
    document.querySelector('#asparagusfern-date').innerHTML = 'Never';
  } else {
    let now = asparagusferncurrentTimeInSecondsFrom01Jan1970();
    let howManySecondsAgo = now - lastClicked;
    document.querySelector('#asparagusfern-date').innerHTML = asparagusfernformatTimeAgo(howManySecondsAgo);
  }
}

setInterval(asparagusfernrefreshPage, 1000);
