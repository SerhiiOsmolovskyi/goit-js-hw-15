const inputElement = document.getElementById('name-input');
const spanElement = document.getElementById('name-output');

inputElement.addEventListener('input', function (event) {
    const inputValue = event.target.value;

    if (inputValue.trim() === '') {
        spanElement.textContent = "Anonymous";
    } else {
        spanElement.textContent = inputValue;
    }
});