document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('close-button');
    const answerButton = document.getElementById('answer-button');
    const submitButton = document.getElementById('submit-button');
    const textarea = modal.querySelector('textarea');
    const commentarySection = document.getElementById('commentary-section');

    // Otwieranie okna modalnego
    answerButton.addEventListener('click', function () {
        modal.style.display = 'flex';
    });

    // Zamknięcie okna modalnego
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

        // Wywołanie funkcji dodającej nowy komentarz
        addNewComment(submitButton, textarea, commentarySection, modal);

});
