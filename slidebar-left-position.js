document.addEventListener("DOMContentLoaded", function () {
  const headerButton = document.getElementById("header-button");
  const slidebarLeft = document.getElementById("slidebar-left");
  const whiteBackground = document.getElementById("white-background");

  headerButton.addEventListener("click", function () {
    slidebarLeft.classList.toggle("show");
    if (themeStylesheet.getAttribute("href") === "night.css") {
      whiteBackground.classList.toggle("show-night");
    } else {
      whiteBackground.classList.toggle("show");
    }
  });
});
