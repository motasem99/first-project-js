// check if there is local storage color option
let mainColors = localStorage.getItem('color_option');

if (mainColors !== null) {
  document.documentElement.style.setProperty('--main-color', mainColors);

  // remove active class from all colors list item
  document.querySelectorAll('.colors-list li').forEach((element) => {
    element.classList.remove('active');

    // add active class on element with data-color === local storage item
    if (element.dataset.color === mainColors) {
      // add active class
      element.classList.add('active');
    }
  });
}

// random background option
let backgroundOption = true;

// variable to control the background interval
let backgroundInterval;

// check if there is local storage random background item
let backgroundLocalItem = localStorage.getItem('background_option');

// check if random background local storage is not empty
if (backgroundLocalItem !== null) {
  if (backgroundLocalItem === 'true') {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }
  // remove active class from all spans
  document.querySelectorAll('.random-backgrounds span').forEach((element) => {
    element.classList.remove('active');
  });

  if (backgroundLocalItem === 'true') {
    document.querySelector('.random-backgrounds .yes').classList.add('active');
  } else {
    document.querySelector('.random-backgrounds .no').classList.add('active');
  }
}

// click on toggle settings gear
document.querySelector('.toggle-settings .fa-gear').onclick = function () {
  // toggle class fa-spin for rotation on self
  this.classList.toggle('fa-spin');

  //toggle class open on main settings box
  document.querySelector('.settings-box').classList.toggle('open');
};

// switch colors
const colorsLi = document.querySelectorAll('.colors-list li');

// loop on all list item
colorsLi.forEach((li) => {
  // click on every list item
  li.addEventListener('click', (e) => {
    // set color on root
    document.documentElement.style.setProperty(
      '--main-color',
      e.target.dataset.color
    );
    // set color on local storage
    localStorage.setItem('color_option', e.target.dataset.color);

    handleActive(e);
  });
});

// switch random backgrounds option
const randomBackEl = document.querySelectorAll('.random-backgrounds span');

// loop on all spans
randomBackEl.forEach((span) => {
  // click on every span
  span.addEventListener('click', (e) => {
    handleActive(e);

    if (e.target.dataset.backgrounds === 'yes') {
      backgroundOption = true;
      randomizeImgs();
      localStorage.setItem('background_option', true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem('background_option', false);
    }
  });
});

// Select Landing Page Element
let landingPage = document.querySelector('.landing-page');

//get array of imgs
let imgsArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

// function to randomize imgs
function randomizeImgs() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      // get random number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);

      // change background image Url
      landingPage.style.backgroundImage =
        'url("img/' + imgsArray[randomNumber] + '")';
    }, 1000);
  }
}

randomizeImgs();

// select skills selector
let ourSkills = document.querySelector('.skills');

window.onscroll = function () {
  // skills offset top
  let skillsOffsetTop = ourSkills.offsetTop;

  // skills outer height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // window Height
  let windowHeight = this.innerHeight;

  // window scrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      '.skill-box .skill-progress span'
    );

    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

// create popup with the image

let ourGallery = document.querySelectorAll('.gallery img');

ourGallery.forEach((img) => {
  img.addEventListener('click', (e) => {
    // create overlay element
    let overlay = document.createElement('div');

    // add class to overlay
    overlay.className = 'popup-overlay';

    // append overlay to the body
    document.body.appendChild(overlay);

    // create the popup
    let popupBox = document.createElement('div');

    // add class to the popup box
    popupBox.className = 'popup-box';

    if (img.alt !== null) {
      // create heading
      let imgHeading = document.createElement('h3');

      // create text for heading
      let imgText = document.createTextNode(img.alt);

      // append the text to the heading
      imgHeading.appendChild(imgText);

      // append the heading to the popup box
      popupBox.appendChild(imgHeading);
    }

    // create the image
    let popupImage = document.createElement('img');

    // set image source
    popupImage.src = img.src;

    // add image to popup box
    popupBox.appendChild(popupImage);

    // append the popup box to body
    document.body.appendChild(popupBox);

    // create the close span
    let closeButton = document.createElement('span');

    // create the close button text
    let closeButtonText = document.createTextNode('X');

    // append text to close button
    closeButton.appendChild(closeButtonText);

    // add class to close button
    closeButton.className = 'close-button';

    // add close button to the popup box
    popupBox.appendChild(closeButton);
  });
});

// close popup
document.addEventListener('click', (e) => {
  if (e.target.classList == 'close-button') {
    // remove the current popup
    e.target.parentNode.remove();

    // remove overlay
    document.querySelector('.popup-overlay').remove();
  }
});

// select all bullets
const allBullets = document.querySelectorAll('.nav-bullets .bullet');

// select all links
const allLinks = document.querySelectorAll('.links a');

function scrollToSomewhere(element) {
  element.forEach((ele) => {
    ele.addEventListener('click', (e) => {
      e.preventDefault();

      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);

// handling active state

function handleActive(ev) {
  // remove active class from all children
  ev.target.parentElement.querySelectorAll('.active').forEach((element) => {
    element.classList.remove('active');
  });

  // add active class on self
  ev.target.classList.add('active');
}

let bulletsSpan = document.querySelectorAll('.bullets-option span');

let bulletsContainer = document.querySelector('.nav-bullets');

let bulletLocalItem = localStorage.getItem('bullets_option');

if (bulletLocalItem !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove('active');
  });

  if (bulletLocalItem === 'block') {
    bulletsContainer.style.display = 'block';
    document.querySelector('.bullets-option .yes').classList.add('active');
  } else {
    bulletsContainer.style.display = 'none';
    document.querySelector('.bullets-option .no').classList.add('active');
  }
}

bulletsSpan.forEach((span) => {
  span.addEventListener('click', (e) => {
    if (span.dataset.display === 'show') {
      bulletsContainer.style.display = 'block';
      localStorage.setItem('bullets_option', 'block');
    } else {
      bulletsContainer.style.display = 'none';
      localStorage.setItem('bullets_option', 'none');
    }

    handleActive(e);
  });
});

// reset button

document.querySelector('.reset-option').onclick = function () {
  // localStorage.clear()
  localStorage.removeItem('color_option');
  localStorage.removeItem('background_option');
  localStorage.removeItem('bullets_option');

  // reload window
  window.location.reload();
};
