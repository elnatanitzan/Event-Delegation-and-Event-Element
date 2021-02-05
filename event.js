// Event Object

const $wrapperEvent = document.getElementById('wrapper');


const sayHello = (event) => {

    console.log(event);

    const colorList = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'gold', 'brown', 'grey', 'orange'];
    const randomNumber = Math.random() * colorList.length;
    const colorRandomIndex = Math.floor(randomNumber);
    $wrapperElement.style.backgroundColor = colorList[colorRandomIndex];

    const isButton = event.target.localName === 'button';
    const altKey = event.altKey = true;

    if (isButton && altKey) {
        console.log('Hello!!');
    }
}

$wrapperElement.addEventListener('click', sayHello);