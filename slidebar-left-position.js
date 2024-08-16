document.addEventListener("DOMContentLoaded", function () {
    const headerButton = document.getElementById("header-button");
    const slidebarLeft = document.getElementById("slidebar-left");
  
    headerButton.addEventListener("click", function () {
      slidebarLeft.classList.toggle("show");
    });
  });