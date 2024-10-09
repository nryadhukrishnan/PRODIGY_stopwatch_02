let milliseconds = 0, seconds = 0, minutes = 0;
let stopwatchInterval;
let isRunning = false;

function updateTime() {
  milliseconds += 10;

  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
  }

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  document.getElementById('milliseconds').textContent = formatTime(milliseconds / 10);
  document.getElementById('seconds').textContent = formatTime(seconds);
  document.getElementById('minutes').textContent = formatTime(minutes);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function startStopwatch() {
  if (!isRunning) {
    stopwatchInterval = setInterval(updateTime, 10);
    isRunning = true;
  }
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  document.getElementById('milliseconds').textContent = '00';
  document.getElementById('seconds').textContent = '00';
  document.getElementById('minutes').textContent = '00';
  document.getElementById('laps').innerHTML = '';
  isRunning = false;
}

function recordLap() {
  const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds / 10)}`;
  const lapItem = document.createElement('li');
  lapItem.textContent = lapTime;
  document.getElementById('laps').appendChild(lapItem);
}
