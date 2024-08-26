document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("toggleSwitch");
  const themeStylesheet = document.getElementById("themeStylesheet");
  const text = document.getElementById("night-mode-txt");
  const slidebarLeft = document.getElementById("slidebar-left");
  const whiteBackground = document.getElementById("white-background");

  // Sprawdzenie zapisanej wartości w localStorage i ustawienie odpowiedniego tekstu
  const currentTheme = localStorage.getItem("theme") || "day";
  if (currentTheme === "night") {
    toggleSwitch.checked = true;
    text.textContent = "Tryb nocny";
  } else {
    toggleSwitch.checked = false;
    text.textContent = "Tryb dzienny";
  }

  toggleSwitch.addEventListener("change", function () {
    if (this.checked) {
      themeStylesheet.setAttribute("href", "night.css");
      text.textContent = "Tryb nocny";
      localStorage.setItem("theme", "night"); // Zapis trybu nocnego
      whiteBackground.classList.remove("show");
      whiteBackground.classList.remove("show-night");
    } else {
      themeStylesheet.setAttribute("href", "day.css");
      text.textContent = "Tryb dzienny";
      localStorage.setItem("theme", "day"); // Zapis trybu dziennego
      whiteBackground.classList.remove("show");
      whiteBackground.classList.remove("show-night");
    }
    if (window.matchMedia("(max-width: 1280px)").matches) {
      slidebarLeft.classList.toggle("show");
    }
  });
});
