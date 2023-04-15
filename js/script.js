
let loader = document.querySelector("#preloader")
window.addEventListener("load", function () {
  loader.style.display = "none"
})
// copy menu for mobile

function copyMenu() {
  //copy inside nav to nav
  let mainNav = document.querySelector(".header-nav nav");
  let navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  //copy .header-top .wrapper to .thetop-nav
  let topNav = document.querySelector(".header-top .wrapper");
  let topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

// show mobile menu
const menuButton = document.querySelector(".trigger"),
  closeButton = document.querySelector(".t-close"),
  addclass = document.querySelector(".site");

menuButton.addEventListener("click", function () {
  addclass.classList.toggle("showmenu");
});
closeButton.addEventListener("click", function () {
  addclass.classList.remove("showmenu");
});
