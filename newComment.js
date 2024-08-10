// Funkcja odpowiedzialna za dodanie nowego komentarza
function addNewComment(submitButton, textarea, commentarySection, modal) {
    submitButton.addEventListener('click', function () {
        const commentText = textarea.value.trim();

        if (commentText !== "") {
            // Stwórz główny kontener dla nowego komentarza
            const newComment = document.createElement('section');
            newComment.className = 'commentary-section';

            // Stwórz lewą część komentarza
            const leftDiv = document.createElement('div');
            leftDiv.className = 'commentary-section-left';

            const logoDiv = document.createElement('div');
            logoDiv.className = 'commentary-section-logo';

            const avatarImg = document.createElement('img');
            avatarImg.src = 'icons/guest.png';

            const userInfoContainer = document.createElement('div');
            userInfoContainer.className = 'user-info-container';

            const userInfo = document.createElement('div');
            userInfo.className = 'user-info';
            userInfo.textContent = 'Guest'; 

            const userTime = document.createElement('time');
            userTime.className = 'user-time';
            const now = new Date();
            userTime.textContent = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');

            userInfoContainer.appendChild(userInfo);
            userInfoContainer.appendChild(userTime);

            logoDiv.appendChild(avatarImg);
            logoDiv.appendChild(userInfoContainer);

            const commentTextParagraph = document.createElement('p');
            commentTextParagraph.className = 'commentary-section-text';
            commentTextParagraph.textContent = commentText;

            leftDiv.appendChild(logoDiv);
            leftDiv.appendChild(commentTextParagraph);

            // Prawa część komentarza 
            const rightDiv = document.createElement('div');
            rightDiv.className = 'commentary-section-right';

            const likesDiv = document.createElement('div');
            likesDiv.className = 'article-likes';

            const likesCount = document.createElement('p');
            likesCount.className = 'article-likes-count';
            likesCount.textContent = '0'; 

            const plusButton = document.createElement('button');
            plusButton.className = 'plus';
            plusButton.id = 'plus-button';

            const minusButton = document.createElement('button');
            minusButton.className = 'minus';
            minusButton.id = 'minus-button';

            likesDiv.appendChild(likesCount);
            likesDiv.appendChild(plusButton);
            likesDiv.appendChild(minusButton);

            rightDiv.appendChild(likesDiv);

            // Stwórz stopkę z opcjami odpowiedzi i udostępnienia
            const footerDiv = document.createElement('footer');
            footerDiv.className = 'commentary-section-footer';

            const commentaryAnswerDiv = document.createElement('div');
            commentaryAnswerDiv.className = 'commentary-answer';

            const replyIcon = document.createElement('img');
            replyIcon.src = 'icons/reply.png';
            replyIcon.alt = 'reply icon';

            const replyText = document.createElement('p');
            replyText.textContent = 'Odpowiedz';

            const shareIcon = document.createElement('img');
            shareIcon.src = 'icons/share.png';
            shareIcon.alt = 'share icon';

            commentaryAnswerDiv.appendChild(replyIcon);
            commentaryAnswerDiv.appendChild(replyText);
            commentaryAnswerDiv.appendChild(shareIcon);

            footerDiv.appendChild(commentaryAnswerDiv);

            // Połącz wszystkie części nowego komentarza
            newComment.appendChild(leftDiv);
            newComment.appendChild(rightDiv);
            newComment.appendChild(footerDiv);

            // Dodaj nowy komentarz do sekcji komentarzy
            commentarySection.parentNode.appendChild(newComment);

            // Wyczyść textarea
            textarea.value = '';

            // Zamknij okno modalne
            modal.style.display = 'none';
        }
    });
}
