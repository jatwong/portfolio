const menu = document.querySelector(".menu");
const dropdown = document.querySelector(".navLinks");
const links = document.querySelectorAll(".navLinks a");
const hero = document.querySelector("#hero");
const backToTop = document.querySelector("#back-to-top");

const closeMenu = () => {
  menu.setAttribute("src", "./ui/icons/menu.svg");
  if (dropdown.classList.contains("showMenu")) {
    dropdown.classList.remove("showMenu");
    hero.classList.remove("marginTop");
  }
};

const showMenu = () => {
  menu.setAttribute("src", "./ui/icons/close.svg");
  dropdown.classList.toggle("showMenu");
  hero.classList.toggle("marginTop");

  links.forEach((link) => link.addEventListener("click", closeMenu));
};

menu.addEventListener("click", () => {
  if (dropdown.classList.contains("showMenu")) {
    closeMenu();
  } else {
    showMenu();
  }
});

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 500) {
    backToTop.classList.add("showBtn");
  } else {
    backToTop.classList.remove("showBtn");
  }
});

backToTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
