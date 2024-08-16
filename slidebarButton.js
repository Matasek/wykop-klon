document.addEventListener("DOMContentLoaded", () => {
  const headerButton = document.getElementById("header-button");
  const slidebarLeft = document.getElementById("slidebar-left");
  const slidebarLarge = document.getElementById("slidebar-left-content-large");
  const slidebarSmall = document.getElementById("slidebar-left-content-small");

  // Definiujemy media query
  const mediaQuery = window.matchMedia("(min-width: 1280px)");

  headerButton.addEventListener("click", () => {
    // Sprawdzamy, czy media query jest spełnione
    if (mediaQuery.matches) {
      slidebarLeft.classList.toggle("short");
      slidebarLarge.classList.toggle("off");
      slidebarSmall.classList.toggle("active");
    }
  });

   // Słuchacz zmian w rozmiarze okna
   mediaQuery.addEventListener('change', (e) => {
    if (!e.matches) {
      // Resetujemy klasy gdy szerokość okna jest mniejsza niż 1280px
      slidebarSmall.classList.remove("active");
      slidebarLarge.classList.remove("off");

      // Usuwamy klasę "short" z "slidebar-left"
      slidebarLeft.classList.remove("short");
    }
  });
});
