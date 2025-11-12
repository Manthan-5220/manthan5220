// Digital Clock using Date(), setInterval(), Arrays, and innerHTML

function updateClock() {
  const now = new Date();

  // Arrays for day and month names
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];

  // Extract current details
  const dayName = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  // Format time (add leading zeros)
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Display the data in HTML
  document.getElementById("day").innerHTML = `Day: ${dayName}`;
  document.getElementById("date").innerHTML = `Date: ${date} ${month} ${year}`;
  document.getElementById("time").innerHTML = `Time: ${hours}:${minutes}:${seconds} ${ampm}`;
}

// Update every second using setInterval
setInterval(updateClock, 1000);

// Initial call to display clock immediately
updateClock();
