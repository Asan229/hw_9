const menu = document.querySelector(".header__menu");
const btn = document.querySelector(".toggle__icon");

function handleClick() {
  menu.classList.toggle("menu__show");
}

btn.addEventListener("click", handleClick);
