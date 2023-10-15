const inputElement = document.getElementById('validation-input');

inputElement.addEventListener('blur', function () {
    const expectedLength = parseInt(inputElement.getAttribute('data-length'));
    const inputValue = inputElement.value.trim().length;

    if (inputValue === expectedLength) {
        inputElement.classList.toggle('valid', true);
        inputElement.classList.toggle('invalid', false);

    } else {
        inputElement.classList.toggle('valid', false);
        inputElement.classList.toggle('invalid', true);
    }
});