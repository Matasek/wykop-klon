document.getElementById("answer-button").addEventListener("click", function() {
    document.getElementById("modal").style.display = "flex";
    document.body.style.overflow = "hidden"; // Zablokowanie przewijania strony
});

document.getElementById("close-button").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "auto"; // Przywrócenie przewijania strony
});

document.getElementById("submit-button").addEventListener("click", function() {
    // Tutaj możesz dodać logikę do obsługi wysyłania odpowiedzi
    alert("Odpowiedź została wysłana!");
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "auto"; // Przywrócenie przewijania strony
});
