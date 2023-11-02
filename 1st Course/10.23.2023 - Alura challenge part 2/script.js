function crescentLoop() {
    let counter = 1
    let desiredNumber = 10
    
    while (counter <= desiredNumber) {
        alert (counter);
        counter++;
    }
    
}

function decrescentLoop() {
    let counter = 10
    let desiredNumber = 0

    while (counter >= 0) {
        alert (counter);
        counter--;
    }

}

function crescentCounter() {
    let counter = 1
    let desiredNumber = prompt('Digite um número:');

    if (isNaN(desiredNumber)) {
        alert('Digite um número válido.')
        return;
    }

    desiredNumber = parseInt(desiredNumber);

    while (counter <= desiredNumber) {
        alert(counter)
        counter++;
    }
}

function decrescentCounter() {
    let counter = 0;
    let desiredNumber = prompt('Digite um número:');

    if (isNaN(desiredNumber)) {
        alert('Digite um número válido.')
        return;
    }

    if (desiredNumber < 0) {
        alert('Digite um número positivo');
        return;
    }

    desiredNumber = parseInt(desiredNumber);

    while (counter <= desiredNumber) {
        alert(desiredNumber);
        desiredNumber--;
    }
}