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

document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('textarea');
    const maxLength = textarea.getAttribute('maxlength');
    const counter = document.createElement('div');
    counter.id = 'char-counter';
    counter.textContent = `Pozostało znaków: ${maxLength}`;
    textarea.parentNode.appendChild(counter);

    textarea.addEventListener('input', function() {
        const remaining = maxLength - textarea.value.length;
        counter.textContent = `Pozostało znaków: ${remaining}`;
    });
});
