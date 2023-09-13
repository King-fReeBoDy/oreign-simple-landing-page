const hamEl = document.getElementById("hamburger-el");
const hamWrapper = document.getElementById("hamburger-wrapper");
const sidebarEl = document.getElementById("sidebar");
const overlayEl = document.getElementById("overlay");

hamEl.addEventListener("click", () => {
  hamWrapper.classList.toggle("rotate");
  sidebarEl.classList.toggle("slide");
  overlayEl.classList.toggle("overlay");
});
