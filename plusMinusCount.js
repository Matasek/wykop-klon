document.addEventListener("DOMContentLoaded", () => {
  const likeButtons = document.querySelectorAll("#plus-button");
  const dislikeButtons = document.querySelectorAll("#minus-button");
  const likeCounts = document.querySelectorAll(".article-likes-count");

  likeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      let currentCount = parseInt(likeCounts[index].textContent);
      likeCounts[index].textContent = currentCount + 1;

      // Disable both plus and minus buttons
      button.disabled = true;
      dislikeButtons[index].disabled = true;
      console.log("wtlaczam plusa");
    });
  });

  dislikeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      let currentCount = parseInt(likeCounts[index].textContent);

        likeCounts[index].textContent = currentCount - 1;

        // Disable both minus and plus buttons
        button.disabled = true;
        likeButtons[index].disabled = true;
        console.log("wtlaczam minusa");
      
    });
  });
});
