const rgbColor = document.querySelector('#rgb-color');
const balls = document.querySelectorAll('.ball');
const answer = document.querySelector('#answer');
const resetButton = document.querySelector('#reset-game');
let score = 0;

function generateRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `(${red}, ${green}, ${blue})`;
}

function generateColors() {
  for (let index = 0; index < balls.length; index += 1) {
    const color = generateRGB();
    balls[index].style.backgroundColor = `rgb${color}`;
    balls[index].setAttribute('data-color', color);
  }
}

function checkAnswer(ball) {
  const ballColor = ball.getAttribute('data-color');
  if (ballColor === rgbColor.textContent) {
    answer.textContent = 'Acertou!';
    score += 3;
    document.querySelector('#score').textContent = score;
  } else {
    answer.textContent = 'Errou! Tente novamente!';
  }
}

function resetGame() {
  answer.textContent = 'Escolha uma cor';
  generateColors();
  const newRgbColor = generateRGB();
  rgbColor.textContent = newRgbColor;
}

generateColors();
const newRgbColor = generateRGB();
rgbColor.textContent = newRgbColor;

balls.forEach((ball) => {
  ball.addEventListener('click', () => {
    checkAnswer(ball);
  });
});

resetButton.addEventListener('click', resetGame);
