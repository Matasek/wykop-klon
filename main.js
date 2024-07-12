document.addEventListener("DOMContentLoaded", () => {
  const headerButton = document.getElementById("header-button");
  const slidebarLeft = document.getElementById("slidebar-left");
  const slidebarLarge = document.getElementById("slidebar-left-content-large");
  const slidebarSmall = document.getElementById("slidebar-left-content-small");

  headerButton.addEventListener("click", () => {
    slidebarLeft.classList.toggle("short");
    slidebarLarge.classList.toggle("off");
    slidebarSmall.classList.toggle("active");
  });
});
