document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("toggleSwitch");
  const themeStylesheet = document.getElementById("themeStylesheet");
  const text = document.getElementById("night-mode-txt")
  const slidebarLeft = document.getElementById("slidebar-left");
  const whiteBackground = document.getElementById("white-background")

  toggleSwitch.addEventListener("change", function () {
    if (this.checked) {
      themeStylesheet.setAttribute("href", "night.css");
      text.textContent = "Tryb nocny"
      whiteBackground.classList.remove("show");
      whiteBackground.classList.remove("show-night");
    } else {
      themeStylesheet.setAttribute("href", "day.css");
      text.textContent = "Tryb dzienny"
      whiteBackground.classList.remove("show");
      whiteBackground.classList.remove("show-night");
    }
    slidebarLeft.classList.toggle("show");
  });
});
