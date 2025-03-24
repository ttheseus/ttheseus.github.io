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

setTimeout(function () {
  updateDate();
  setInterval(updateDate, 24 * 60 * 60 * 1000);
}, timeUntilNextMidnight());

function navigateToPage(page) {
  window.location.href = page;
}


var typeElement = document.querySelector('.type');
if (typeElement) {
  // Show the element after the page loads
  typeElement.style.display = 'inline-block';
}

function aboutMeText(section) {
  const textContent = document.getElementById('text-content')
  const navContent = document.getElementById('nav-content')

  textContent.classList.add('fade-in')

  setTimeout(() => {
    textContent.classList.remove('fade-in')
  }, 1000);

  if (section === 'hobbies') {
    textContent.innerHTML = `
      <p> 
      > digital illustration <br>
      > creative writing <br>
      > coding games <br>
      > cryptography & hacking <br>
      > volleyball 
      </p>
    `
    navContent.innerHTML = `
      &#9733 <a href="#" onclick="aboutMeText('back')">back... </a> <br><br>
      &#9733 <a href="#" onclick="aboutMeText('musings')">musings...</a> <br><br>
      &#9733 <a href="#">fun... !!!</a>
    `
  } else if (section === 'musings') {
    textContent.innerHTML = `
      <p>what did the object detector say when it went skydiving?</p>
      <input type="text" id="joke" name="joke">  
      <button onclick="checkJoke()">submit</button>
      <p id="response"></p>
    `
    navContent.innerHTML = `
      &#9733 <a href="#" onclick="aboutMeText('hobbies')">hobbies...</a> <br><br>
      &#9733 <a href="#" onclick="aboutMeText('back')">back... </a> <br><br>
      &#9733 <a href="#">fun... !!!</a>
    `
  } else if (section == 'back') {
    textContent.innerHTML = `
      &#9733 computer engineer at the <a href="https://uwaterloo.ca/">university of waterloo</a> !<br> <br>
      &#9733 she/her | &#9733 ace | &#9733 <u>artist</u> & aspiring <u>dev</u> &#9733 <br><br>
      &#9733 hoping to have a career in <u>ai development</u> :P
    `
    navContent.innerHTML = `
      &#9733 <a href="#" onclick="aboutMeText('hobbies')">hobbies... </a> <br><br>
      &#9733 <a href="#" onclick="aboutMeText('musings')">musings...</a> <br><br>
      &#9733 <a href="#">fun... !!!</a>
    `
  }
}

function checkJoke() {
  const input = document.getElementById('joke').value.trim().toLowerCase();
  const response = document.getElementById('response');

  if (input == 'yolo') {
    response.textContent = 'you are .... CORRECT!!! have a cookie';
  } else {
    response.textContent = 'you are .... WRONG!!! airstrike in 3... 2... 1... jk'
  }
}
