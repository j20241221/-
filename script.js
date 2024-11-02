const countDisplay = document.querySelector('.count-display');
const countButton = document.querySelector('.count-button');
const backgroundChangeButton = document.querySelector('.background-change-button');

let count = 0;

countButton.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

backgroundChangeButton.addEventListener('click', () => {
  const randomColor1 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  const randomColor2 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  document.body.style.background = `linear-gradient(to bottom right, ${randomColor1}, ${randomColor2})`;
});