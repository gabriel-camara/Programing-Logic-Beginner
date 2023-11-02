let numberInput = document.getElementById('numberInput');
let incrementArrow = document.getElementById('incrementArrow');
let decrementArrow = document.getElementById('decrementArrow');

incrementArrow.addEventListener('click', function() {
    numberInput.stepUp();
});

decrementArrow.addEventListener('click', function() {
    numberInput.stepDown();
});

window.addEventListener('keydown', function (event) {
    let inputValue;
    if (event.key === "Enter") {
        let userName = document.getElementById("numberInput");
        if (userName) {
            inputValue = userName.value;
        }
        if (inputValue !== null && inputValue !== '') {
            let doubleValue = parseFloat(inputValue) * 2;
            showText('p5', `O dobro de ${inputValue} é ${doubleValue}!`);
            userName.value = '';
        }
    }
});

window.addEventListener('keydown', function (event) {
    let inputValue;
    if (event.key === "Enter") {
        let userName = document.getElementById("numberInput");
        if (userName) {
            inputValue = userName.value;
        }
        if (inputValue !== null && inputValue !== '') {
            let doubleValue = parseFloat(inputValue) * 2;
            showText('p5', `O dobro de ${inputValue} é ${doubleValue}!`);
            userName.value = '';
        }
    }
});

window.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        let firstNumberInput = document.getElementById("numberInputOne");
        let secondNumberInput = document.getElementById("numberInputTwo");
        let thirdNumberInput = document.getElementById("numberInputThree");
        
        let firstNumber = firstNumberInput.value;
        let secondNumber = secondNumberInput.value;
        let thirdNumber = thirdNumberInput.value;

        let numberArray = [firstNumber, secondNumber, thirdNumber];
        if (numberArray !== null && numberArray !== '') {
            let numberAverage = (parseFloat(firstNumber) + parseFloat(secondNumber) + parseFloat(thirdNumber)) / 3; 
            showText('p7', `A média entre ${firstNumber}, ${secondNumber} e ${thirdNumber} é ${numberAverage}!`);
            firstNumberInput.value = '';
            secondNumberInput.value = '';
            thirdNumberInput.value = '';
        }
    }
});

window.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        let firstNumberInput = document.getElementById("numberBiggerOne");
        let secondNumberInput = document.getElementById("numberBiggerTwo");
        
        let firstNumber = firstNumberInput.value;
        let secondNumber = secondNumberInput.value;

        let numberArray = [firstNumber, secondNumber];
        if (numberArray !== null && numberArray !== '' && firstNumber < secondNumber) {
            showText('p9', `${firstNumber} é menor que ${secondNumber}.`);
            firstNumberInput.value = '';
            secondNumberInput.value = '';
        } else if (numberArray !== null && numberArray !== '' && firstNumber > secondNumber) {
            showText('p9', `${secondNumber} é menor que ${firstNumber}.`);
            firstNumberInput.value = '';
            secondNumberInput.value = '';
        } else {
            showText('p9', `Os dois números são iguais.`);
            firstNumberInput.value = '';
            secondNumberInput.value = '';
        }
    }
});

window.addEventListener('keydown', function (event) {
    let inputValue;
    if (event.key === "Enter") {
        let userName = document.getElementById("expNumberInput");
        if (userName) {
            inputValue = userName.value;
        }
        if (inputValue !== null && inputValue !== '') {
            let expValue = parseFloat(inputValue) * parseFloat(inputValue);
            showText('p11', `O quadrado de ${inputValue} é ${expValue}!`);
            userName.value = '';
        }
    }
});

function showText(tag, text) {
    let title = document.querySelector(tag);
    title.textContent = (text);
}

showText('#title', 'Desafio 23.10.2023');
showText('h2', 'Boas Vindas!');
showText('p1', 'Olá Mundo!');
showText('h3', 'Quem é você?');
showText('p2', 'Digite seu nome:');
showText('h4', 'Qual o dobro?');
showText('p4', 'Digite um número para calcularmos o seu dobro:')
showText('h5', 'Qual a média?')
showText('p6', 'Digite três números para que possamos tirar a média deles:')
showText('h6', 'Qual é maior?');
showText('p8', 'Digite dois números para dizermos qual deles é o maior:');
showText('h7', 'Qual é o quadrado?');
showText('p10', 'Digite um número para calcularmos o quadrado dele:');


function closeModal(modalId, ContainerId, event) {
    let modal = document.getElementById(modalId);
    let containerModal = document.getElementById(ContainerId);
    if (event && event.which === 1 && event.target != containerModal && !containerModal.contains(event.target)) {
        modal.style.display = 'none';
        let userName = document.getElementById('nameInput');
        userName.value = '';
    }
}

function modalListener (modalId, containerId) {
    window.addEventListener('mousedown', function(event) {
        closeModal(modalId, containerId, event);
    });
}

modalListener('modalOne', 'modalOneContainer');
modalListener ('modalTwo', 'modalTwoContainer');
modalListener('modalThree', 'modalThreeContainer');
modalListener('modalFour', 'modalFourContainer');
modalListener('modalFive', 'modalFiveContainer');
modalListener('modalSix', 'modalSixContainer');

function scriptOne (id) {
    let modal = document.getElementById(id)
    setTimeout(function() {
        modal.style.display = 'flex';
    }, 150);
}

function closeModalButton(id) {
    let modal = document.getElementById(id);
    setTimeout(function() {
        modal.style.display = 'none';
        showText('p3', '');
        showText('p7', '');
        showText('p5', '');
        showText('p9', '');
    }, 150);
}

document.getElementById('closeModal').addEventListener('click', closeModalButton);
