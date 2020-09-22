// check if there is local storage color option
let mainColors = localStorage.getItem('color_option');

if (mainColors !== null) {
  document.documentElement.style.setProperty(
    '--main-color',
    localStorage.getItem('color_option')
  );
}

// toggle spin class on icon
document.querySelector('.toggle-settings .fa-gear').onclick = function () {
  // toggle class fa-spin for rotation
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

// Select Landing Page Element
let landingPage = document.querySelector('.landing-page');

//get array of imgs
let imgsArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

setInterval(function () {
  // get random number
  let randomNumber = Math.floor(Math.random() * imgsArray.length);

  // change background image Url
  landingPage.style.backgroundImage =
    'url("img/' + imgsArray[randomNumber] + '")';
}, 3000);
