document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("toggleSwitch");
  const themeStylesheet = document.getElementById("themeStylesheet");
  const text = document.getElementById("night-mode-txt")

  toggleSwitch.addEventListener("change", function () {
    if (this.checked) {
      themeStylesheet.setAttribute("href", "night.css");
      text.textContent = "Tryb nocny"
    } else {
      themeStylesheet.setAttribute("href", "day.css");
      text.textContent = "Tryb dzienny"
    }
  });
});
