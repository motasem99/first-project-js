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

    // remove active class from all children
    e.target.parentElement.querySelectorAll('.active').forEach((element) => {
      element.classList.remove('active');
    });

    // add active class on self
    e.target.classList.add('active');
  });
});

// switch random backgrounds option
const randomBackEl = document.querySelectorAll('.random-backgrounds span');

// loop on all spans
randomBackEl.forEach((span) => {
  // click on every span
  span.addEventListener('click', (e) => {
    // remove active class from all children
    e.target.parentElement.querySelectorAll('.active').forEach((element) => {
      element.classList.remove('active');
    });

    // add active class on self
    e.target.classList.add('active');

    if (e.target.dataset.background === 'yes') {
      backgroundOption = true;
      randomizeImgs();
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
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
