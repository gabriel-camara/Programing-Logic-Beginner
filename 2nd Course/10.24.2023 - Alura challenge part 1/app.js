let title = document.querySelector('h1');
title.innerHTML = 'Hora do Desafio';

function recognizeClick() {
    console.log ('O botão foi clicado.');
}

function callAlert() {
    alert ('Eu amo JS \u2764');
}

function callPrompt() {
    let livingCity = prompt ('Em que cidade você mora?');
    alert (`Estive em ${livingCity} e lembrei de você!`);
}

function addNumber() {
    let firstNumber = prompt ('Digite um número:');
    let secondNumber = prompt ('Digite um número para ser somado ao anterior:');

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        let result = parseFloat(firstNumber) + parseFloat(secondNumber);
        alert ('O resultado da soma é: ' + result);
    } else {
        alert ('Digite um número válido.');
    }
}