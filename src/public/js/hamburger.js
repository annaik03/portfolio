const hamburgerButton = document.getElementById("hamburger");
const menuIcon = document.getElementById("sp_menu_icon");
const closeIcon = document.getElementById("sp_close_icon");
const spMenu = document.getElementById("sp_menu");
const homeButton = document.getElementById("sp_menu_home");
const aboutButton = document.getElementById("sp_menu_about");
const webSitesButton = document.getElementById("sp_menu_web_sites");
const webDesignsButton = document.getElementById("sp_menu_web_designs");
const bannarDesignsButton = document.getElementById("sp_menu_banner_designs");

const toggleMenu = () => {
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  spMenu.classList.toggle("translate-x-full");
};

hamburgerButton.addEventListener("click", (_event) => {
  toggleMenu();
});

homeButton.addEventListener("click", (_event) => {
  toggleMenu();
});

aboutButton.addEventListener("click", (_event) => {
  toggleMenu();
});

webSitesButton.addEventListener("click", (_event) => {
  toggleMenu();
});

webDesignsButton.addEventListener("click", (_event) => {
  toggleMenu();
});

bannarDesignsButton.addEventListener("click", (_event) => {
  toggleMenu();
});
