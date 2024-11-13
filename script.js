const menu = document.querySelector(".menu");
const dropdown = document.querySelector(".navLinks");
const links = document.querySelectorAll(".navLinks a");
const hero = document.querySelector("#hero");
const backToTop = document.querySelector("#back-to-top");
const BACKEND_API = "https://emailjs-proxy.vercel.app/submit";

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
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 500
  ) {
    backToTop.classList.add("showBtn");
  } else {
    backToTop.classList.remove("showBtn");
  }
});

backToTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const setCurrentYear = () => {
  const yearElement = document.getElementById("year");
  yearElement.textContent = new Date().getFullYear();
};

document.addEventListener("DOMContentLoaded", setCurrentYear());

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(BACKEND_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(response);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    } else {
      setTimeout(() => {
        window.location.href = "submitted.html";
      }, 500);
    }
  } catch (e) {
    throw new Error({ message: e.message });
  }
};
