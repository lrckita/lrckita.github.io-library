const navigationHeight = document.querySelector("nav").offsetHeight;

console.log(navigationHeight);

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);
const toggleMenu = document.querySelector("#toggle-menu");
const navbar = document.querySelector("nav ul");
const close = document.querySelector("#close");

toggleMenu.addEventListener("click", function () {
  navbar.style.transform = "translateX(0px)";
  close.style.display = "block";
  toggleMenu.style.display = "none";
});

close.addEventListener("click", function () {
  navbar.style.transform = "translateX(200px)";
  toggleMenu.style.display = "block";
  close.style.display = "none";
});
