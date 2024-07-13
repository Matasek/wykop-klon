document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("toggleSwitch");
  const themeStylesheet = document.getElementById("themeStylesheet");

  toggleSwitch.addEventListener("change", function () {
    if (this.checked) {
      console.log("Switched On");
      themeStylesheet.setAttribute("href", "night.css");
    } else {
      console.log("Switched Off");
      themeStylesheet.setAttribute("href", "day.css");
    }
  });
});
