



function evaluateLove(){
    const loveName =prompt('Whats is your name?')
    const color = prompt(`${loveName} is a good name. What is your favorite color?`)
    switch (color) {
        case 'green':
        case 'red':
        case 'blue':
            alert ('I think we are a match!');
            break;
        default:
            alert('Thank you next!');
            break;
    }



   
}