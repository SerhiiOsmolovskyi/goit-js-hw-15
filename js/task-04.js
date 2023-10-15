let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById('value');

console.log(decrementButton);
console.log(incrementButton);
console.log(valueSpan);

decrementButton.addEventListener('click', function () {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
});

incrementButton.addEventListener('click', function () {
    counterValue += 1;
    valueSpan.textContent = counterValue;
});