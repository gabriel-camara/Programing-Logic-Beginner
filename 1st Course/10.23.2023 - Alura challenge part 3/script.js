function firstScript() {
    console.log ('Boas vindas!');
}

function secondScript() {
    let name = 'Gabriel';

    alert (`Olá, ${name}!`);
    console.log (`Olá, ${name}!`);
}

function thirdScript() {
    let favouriteLanguage = prompt ('Qual a linguagem de programação que você mais gosta?');
    console.log (favouriteLanguage);
}

function fourthScript() {
    let valourOne = 33;
    let valourTwo = 754;
    let addedValour = valourOne + valourTwo;
    let subtractedValue = valourOne - valourTwo;

    console.log (`A soma de ${valourOne} e ${valourTwo} é ${addedValour}.`);
    console.log (`A subtração de ${valourOne} e ${valourTwo} é ${subtractedValue}.`);
}

function fifthScript() {
    let userAge = prompt ('Qual a sua idade?');

    if (!isNaN(userAge) && Number.isInteger(Number(userAge))) {
        if (userAge >= 18) {
            console.log('Pessoa é maior de idade.');
        } else {
            console.log('Pessoa é menor de idade.');
        }
    } else {
        alert('Por favor, digite uma idade válida (número inteiro).');
    }
}

function sixthScript() {
    let inputNumber = prompt('Digite um número:')
    
    if (!isNaN(inputNumber)) {
        if (inputNumber > 0) {
            alert(`${inputNumber} é positivo.`);
        } else if (inputNumber < 0) {
            alert(`${inputNumber} é negativo.`);
        } else {
            alert(`${inputNumber} é neutro.`);
        }
    } else {
        alert('Insira um número válido.')
    }
}

function seventhScript() {
    let firstNumber = 0;
    let finalNumber = 10;
    let counter = firstNumber;

    while (counter != finalNumber) {
        counter++;
        console.log (counter);
    }

}

function eigthScript() {
    let grade = 6;

    if (grade >= 7) {
        console.log('Aprovado.');
    } else {
        console.log('Reprovado.');
    }
}

function ninthScript() {
    let randomNumber = Math.random();

    console.log (randomNumber);
}

function tenthScript() {
    let randomNumber = parseInt(Math.random() * 10 + 1);
    console.log(randomNumber);
}

function eleventhScript() {
    let randomNumber = parseInt(Math.random() * 1000 + 1);
    console.log(randomNumber);
}