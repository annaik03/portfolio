const hamburgerButton = document.getElementById("hamburger");
const hamburgerSvg = document.getElementById("hamburger_svg");
const closeSvg = document.getElementById("close_svg");
const spMenu = document.getElementById("sp_menu");

hamburgerButton.addEventListener("click", (_event) => {
  hamburgerSvg.classList.toggle("hidden");
  closeSvg.classList.toggle("hidden");
  spMenu.classList.toggle("translate-x-full");
});
