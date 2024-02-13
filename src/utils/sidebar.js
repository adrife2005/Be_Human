const navbar__menu = document.querySelector(".navbar__menu");
const sidebar__toggle = document.querySelector(".sidebar__toggle");
const sidebar = document.querySelector(".sidebar");
const bg__opacity = document.querySelector(".opacity-background");
const hero = document.querySelector(".hero");

navbar__menu.addEventListener("click", () => {
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
