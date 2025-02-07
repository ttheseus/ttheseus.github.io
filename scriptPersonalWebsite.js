function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('current-time').textContent = timeString;
  }
  
  // Update time immediately and then every second
  updateTime();
  setInterval(updateTime, 1000);

  function updateDate() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = now.getMonth().toString().padStart(2, '0');
    const year = now.getFullYear().toString().padStart(4, '0');

    const dayString = `${year}-${month}-${day}`;
    document.getElementById('current-date').textContent = dayString;
  }

  function timeUntilNextMidnight() {
    const now = new Date();
    const nextMidnight = new Date(now);
    nextMidnight.setHours(24, 0, 0, 0);

    return nextMidnight - now;
  }

  updateDate();

  setTimeout(function() {
    updateDate();
    setInterval(updateDate, 24*60*60*1000);
  }, timeUntilNextMidnight());
  
