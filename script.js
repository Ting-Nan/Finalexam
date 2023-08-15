const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  let is24HourFormat = true;
  
  function updateClock() {
    const now = new Date();
  
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    const dayOfWeek = daysOfWeek[now.getDay()];
  
    let hours = now.getHours();
    let ampm = '';
  
    if (!is24HourFormat) {
      ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
    }
  
    const minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    const seconds = (now.getSeconds() < 10 ? '0' : '') + now.getSeconds();
  
    document.getElementById("date").textContent = `${month} ${date}, ${year}`;
    document.getElementById("day").textContent = dayOfWeek;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("session").textContent = ampm;
  
    
    const toggleButton = document.getElementById("toggle-btn");
    toggleButton.textContent = is24HourFormat ? '12-hr' : '24-hr';
  }
  
  
  document.getElementById("toggle-btn").addEventListener('click', function() {
    is24HourFormat = !is24HourFormat;
    updateClock();
  });
  

  setInterval(updateClock, 1000);
  
 
  updateClock();
  