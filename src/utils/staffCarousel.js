const carousel = document.querySelector(".staff__carousel");
const staff__container = document.querySelector(".staff__container");
const arrowBtns = document.querySelectorAll(".staff__carousel__btn");
const firstCardWidth = carousel.querySelector(".staff__card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDraggin = false,
  startX,
  startScrollLeft,
  timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDraggin = true;
  carousel.classList.add("dragging");
  console.log(isDraggin);
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const draggin = (e) => {
  if (!isDraggin) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = (e) => {
  isDraggin = false;
  carousel.classList.remove("dragging");
};

const infiniteScroll = (e) => {
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  } else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  // clearTimeout(timeoutId);
  // if (!staff__container.matches(":hover")) autoPlay();
};

// const autoPlay = () => {
//   if (window.innerWidth < 800) return;
//   timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 0);
// };
// autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", draggin);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
// staff__container.addEventListener("mouseenter", clearTimeout(timeoutId));
// staff__container.addEventListener("mouseleave", autoPlay);
