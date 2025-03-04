const menuBtn = document.getElementById("menuBtn");
const primaryNav = document.getElementById("primaryNav");

menuBtn.addEventListener("click", () => {
  primaryNav.classList.toggle("show");
});
