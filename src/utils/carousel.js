const img = document.querySelector(".hero__video");

let i = 0;
let images = [];
let time = 2000;

// Image List
images[0] = "be_carouselGym.jpg";
images[1] = "be_carouselPilates.jpg";
images[2] = "be_carouselBeDance.jpg";
images[3] = "be_carouselCardio.jpg";
images[4] = "be_carouselBeFit.jpg";
images[5] = "be_carouselCrossfit.jpg";
images[6] = "be_carouselYoga.jpg";

// Change Img
function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout(changeImg, time);
}

document.addEventListener("DOMContentLoaded", changeImg);
