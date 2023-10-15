const inputSlider = document.getElementById('font-size-control');
const spanText = document.getElementById('text');

inputSlider.addEventListener('input', function () {
    const textSize = inputSlider.value + 'px';
    spanText.style.fontSize = textSize;
});