setInterval(() => {
  const time = document.getElementById("clock");
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let daynight = "AM";

  if (hours > 12) {
    daynight = "PM";
    hours = hours - 12;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  time.textContent = hours + ":" + minutes + " " + daynight;
}, 1000); // Update every 1000 milliseconds (1 second)
