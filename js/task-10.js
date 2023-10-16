function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener('click', handleCreateBoxes);
destroyBtn.addEventListener('click', handleDestroyBoxes);

function handleCreateBoxes() {
  const amount = input.value;
  destroyBoxes();

  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
    size += 10;
  }
  boxesContainer.append(...elements);
}
function handleDestroyBoxes() {
  destroyBoxes();
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}


