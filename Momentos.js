const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const restartBtn = document.getElementById("restart-btn");
const timerDisplay = document.getElementById("timer-display");
const quilBtn = document.getElementById("quil-btn");
const momentBtn = document.getElementById("moment-btn");
const timeList = document.getElementById("time-list");

let startTime, elapsedTime = 0, timer;

// Add event listeners to the buttons
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
restartBtn.addEventListener("click", restartTimer);

quilBtn.addEventListener("click", displayTime);
momentBtn.addEventListener("click", displayTime);

// Function to toggle the timer between start and pause
function startTimer() {
  if (!timer) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTimer, 1000);
  } else {
    clearInterval(timer);
    timer = null;
  }
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timer);
  timer = null;
  elapsedTime = Date.now() - startTime; // update elapsedTime
}

// Function to restart the timer without resetting it to zero
function restartTimer() {
  startTime = Date.now();
  elapsedTime = 0;
}

// Function to update the timer display
function updateTimer() {
  elapsedTime = Date.now() - startTime;
  const timeOnTimer = getTimeString(elapsedTime); // get the current time
  timerDisplay.textContent = timeOnTimer;
}

function getTimeString(time) {
  const seconds = Math.floor(time / 1000) % 60;
  const minutes = Math.floor(time / 1000 / 60) % 60;
  const hours = Math.floor(time / 1000 / 60 / 60);
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function displayTime(event) {
  const timeOnTimer = getTimeString(elapsedTime); // get the current time
  const li = document.createElement("li");
  li.textContent = `${event.target.textContent}: ${timeOnTimer}`;
  timeList.appendChild(li);
}