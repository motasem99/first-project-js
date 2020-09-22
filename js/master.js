// toggle spin class on icon
document.querySelector('.toggle-settings .fa-gear').onclick = function () {
  // toggle class fa-spin for rotation
  this.classList.toggle('fa-spin');

  //toggle class open on main settings box
  document.querySelector('.settings-box').classList.toggle('open');
};

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
