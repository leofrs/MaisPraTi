// script.js
window.onscroll = function () {
  const menu = document.querySelector(".menu");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    menu.classList.add("flutuante");
  } else {
    menu.classList.remove("flutuante");
  }
};
