document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("toggleSwitch");
  toggleSwitch.addEventListener("change", function () {
    if (this.checked) {
      console.log("Switched On");
    } else {
      console.log("Switched Off");
    }
  });
});
