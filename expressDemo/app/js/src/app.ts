const button = document.querySelector('button')!;

function clickHandler(message: string) {
    console.log('Clicked! ' + message);
}

// button.addEventListener('click', () => {
//     console.log('Clicked');
// })

if (button) {
    button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}