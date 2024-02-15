const navbar__menu = document.querySelector(".navbar__menu");
const sidebar__toggle = document.querySelector(".sidebar__toggle");
const sidebar = document.querySelector(".sidebar");
const bg__opacity = document.querySelector(".opacity-background");
const hero = document.querySelector(".hero");
const navbar = document.querySelector("header");

navbar__menu.addEventListener("click", (e) => {
  sidebar.classList.add("open");
  bg__opacity.classList.add("open");
  hero.classList.add("opacity");
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    sidebar.classList.remove("open");
    bg__opacity.classList.remove("open");
    hero.classList.remove("opacity");
  }
});

sidebar__toggle.addEventListener("click", () => {
  sidebar.classList.remove("open");
  bg__opacity.classList.remove("open");
  hero.classList.remove("opacity");
});

navbar__menu.addEventListener("keydown", (e) => {
  // Key
  // if (e.key === "Enter") {
  //   alert("1");
  // }

  // KeyCode
  // if (e.keyCode === 13) {
  //   alert(1);
  // }

  // code
  if (e.code === "Escape") {
    sidebar.classList.remove("open");
    bg__opacity.classList.remove("open");
    hero.classList.remove("opacity");
  }
});

document.addEventListener("wheel", (e) => {
  if (e.deltaY === -100) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
