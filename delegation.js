const $wrapperElement = document.getElementById('wrapper');

$wrapperElement.addEventListener('click', (event) => {
    if (event.target.localName !== 'button') {
        console.error('NOT A BUTTON TAG NODE');
        return false;
    }
    console.info('Click');
    $wrapperElement.innerHTML += '<button>Click</button>';
});