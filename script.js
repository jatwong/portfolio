const menu = document.querySelector(".menu");
const links = document.querySelector(".navLinks");
const hero = document.querySelector("#hero");

menu.addEventListener("click", () => {
  links.classList.toggle("showMenu");
  if (links.classList.contains("showMenu")) {
    hero.classList.add("marginTop");
  } else {
    hero.classList.remove("marginTop");
  }
});
