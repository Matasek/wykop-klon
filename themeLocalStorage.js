(function () {
  const currentTheme = localStorage.getItem("theme") || "day";
  if (currentTheme === "night") {
    document.write(
      '<link rel="stylesheet" href="night.css" id="themeStylesheet">'
    );
  } else {
    document.write(
      '<link rel="stylesheet" href="day.css" id="themeStylesheet">'
    );
  }
})();
