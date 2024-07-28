document.addEventListener("DOMContentLoaded", () => {
  const likeButtons = document.querySelectorAll(".like-button");
  const likeCounts = document.querySelectorAll(".like-count");

  likeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      let currentCount = parseInt(likeCounts[index].textContent);
      likeCounts[index].textContent = currentCount + 1;

      button.disabled = true;
    });
  });
});
