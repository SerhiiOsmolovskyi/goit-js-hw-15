const inputSlider = document.getElementById('font-size-control');
const spanText = document.getElementById('text');

spanText.style.fontSize = inputSlider.value + 'px';

inputSlider.addEventListener('input', function () {
    const textSize = inputSlider.value + 'px';
    spanText.style.fontSize = textSize;
});