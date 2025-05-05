let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const input = document.getElementById("guessInput");
  const result = document.getElementById("result");
  const guess = parseInt(input.value);
  attempts++;

  if (isNaN(guess) || guess < 1 || guess > 100) {
    result.textContent = "Masukkan angka valid antara 1–100!";
    result.style.color = "orange";
  } else if (guess < secretNumber) {
    result.textContent = "Terlalu kecil!";
    result.style.color = "blue";
  } else if (guess > secretNumber) {
    result.textContent = "Terlalu besar!";
    result.style.color = "red";
  } else {
    result.textContent = `Benar! Kamu menebak dalam ${attempts} percobaan.`;
    result.style.color = "green";
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guessInput").value = "";
  document.getElementById("result").textContent = "";
}
