document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("toggleSwitch");
  const themeStylesheet = document.getElementById("themeStylesheet");

  toggleSwitch.addEventListener("change", function () {
    if (this.checked) {
      themeStylesheet.setAttribute("href", "night.css");
    } else {
      themeStylesheet.setAttribute("href", "day.css");
    }
  });
});
