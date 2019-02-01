document.addEventListener('click', function (event) {
    var classList = event.target.classList;
    if (classList.contains('img-center') &&
        classList.contains('resizable')) {
        classList.toggle('fullscreen');
    }
});
