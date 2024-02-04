const menu = document.querySelector(".menu");
const dropdown = document.querySelector(".navLinks");
const links = document.querySelectorAll(".navLinks a");
const hero = document.querySelector("#hero");

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
  if(dropdown.classList.contains("showMenu")) {
    closeMenu();
  } else {
    showMenu();
  }
})