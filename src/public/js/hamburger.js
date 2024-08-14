const hamburgerButton = document.getElementById("hamburger");
const hamburgerSvg = document.getElementById("sp_menu_icon");
const closeSvg = document.getElementById("sp_close_icon");
const spMenu = document.getElementById("sp_menu");

hamburgerButton.addEventListener("click", (_event) => {
  hamburgerSvg.classList.toggle("hidden");
  closeSvg.classList.toggle("hidden");
  spMenu.classList.toggle("translate-x-full");
});
