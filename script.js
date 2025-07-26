let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const tries = document.getElementById("tries");

  attempts++;

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "❗ Please enter a number between 1 and 100.";
    message.style.color = "red";
    return;
  }

  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}`;
    message.style.color = "green";
    tries.textContent = `It took you ${attempts} tries.`;
  } else if (guess < secretNumber) {
    message.textContent = "🔼 Too low. Try again!";
    message.style.color = "orange";
  } else {
    message.textContent = "🔽 Too high. Try again!";
    message.style.color = "orange";
  }
}
