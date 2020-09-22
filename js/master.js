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
}, 5000);
