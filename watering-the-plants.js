function currentTimeInSecondsFrom01Jan1970() {
  let dateAsObject = new Date();
  let dateInMs = dateAsObject - 0;
  let dateInS = dateInMs / 1000;
  return Math.round(dateInS);
}

function buttonPressed() {
  let now = currentTimeInSecondsFrom01Jan1970();
  localStorage.setItem('last-watered', now);
}

document.querySelector('button').addEventListener('click', buttonPressed);

function formatTimeAgo(timeInS) {
  let secondsOnly = timeInS % 60;
  let timeInM = (timeInS - secondsOnly) / 60;
  let minutesOnly = timeInM % 60;
  let timeInH = (timeInM - minutesOnly) / 60;
  let hoursOnly = timeInH % 24;
  let timeInD = (timeInH - hoursOnly) / 24;
  return `${timeInD}d ${timeInH}h ${minutesOnly}m ${secondsOnly}s ago`;
}

function refreshPage() {
  let lastClicked = localStorage.getItem('last-watered');
  if (lastClicked === null) {
    document.querySelector('#date').innerHTML = 'Never';
  } else {
    let now = currentTimeInSecondsFrom01Jan1970();
    let howManySecondsAgo = now - lastClicked;
    document.querySelector('#date').innerHTML = formatTimeAgo(howManySecondsAgo);
  }
}

setInterval(refreshPage, 1000);
