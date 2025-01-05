document.getElementById("showerButton").addEventListener("click", function() {
    const word = "❤️"; // Word to fall from random locations
    createFallingWord(word);
  });
  
  function createFallingWord(word) {
    const container = document.getElementById("fallingContainer");
  
    // Create a div element to hold the falling word
    const fallingWord = document.createElement("div");
    fallingWord.classList.add("fallingWord");
    fallingWord.textContent = word;
  
    // Randomize the horizontal position (left)
    const randomLeft = Math.random() * 100; // Random value between 0 and 100
    fallingWord.style.left = `${randomLeft}%`; // Position it randomly along the width of the container
  
    // Append the falling word to the container
    container.appendChild(fallingWord);
  
    // Remove the falling word after animation completes (3s in this case)
    setTimeout(() => {
      fallingWord.remove();
    }, 3000);
  }
  