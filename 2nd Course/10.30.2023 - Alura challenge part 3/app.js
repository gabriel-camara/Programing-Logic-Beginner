//IMC Function
let heightInput = document.getElementById('heightInput');
let weightInput = document.getElementById('weightInput');
let height = null;
let weight = null;

function heightNumber(event) {
    if (event.key === 'Enter') {
        height = parseFloat(heightInput.value);
        if (!isNaN(height) && weightInput.hasAttribute('disabled')) {
            showText('p1', 'Agora digite seu peso em kg:');
            heightInput.disabled = true;
            weightInput.removeAttribute('disabled');
            weightInput.focus();
        }
    }
}

function weightNumber(event) {
    if (event.key === 'Enter') {
        weight = parseFloat(weightInput.value);
        if (!isNaN(weight)) {
            heightInput.disabled = true;
            weightInput.disabled = true;
            let imc = (weight / (height * height / 10000)).toFixed(2);
            showText('p1', `O seu IMC é ${imc}.`);
        }
    }
}

window.addEventListener('keydown', heightNumber);
window.addEventListener('keydown', weightNumber);

//Fatored function
let number;
let fatoredNumberInput = document.getElementById('fatoredNumberInput');
fatoredNumberInput.addEventListener('keydown', factorCalc);

function factorCalc(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        number = parseInt(fatoredNumberInput.value);
        if (number < 0) {
            showText('p2', `Fatoração só pode ser definida por número positivo e inteiro. Por favor, insira um número válido:`);
        } else if (number === 0 || number === 1) {
            showText('p3', `${number}! é 1.`);
        } else {
            let factorial = 1;
            let i = 2;
            while (i <= number) {
                factorial *= i;
                i++;
            }
            showText('p3', `${number}! é ${factorial}.`);
        }
        fatoredNumberInput.value = '';
    }
}

//Dólar conversion
window.addEventListener ('keydown', function dolarConversion(event) {
    if (event.key === 'Enter') {
        let realInput = document.getElementById('realInput');
        event.preventDefault();
        let realInputValue = parseFloat(realInput.value).toFixed(2);
        let dolarConversion;
        if (!isNaN(realInputValue)) {
            dolarConversion = (realInputValue / 4.8).toFixed(2);
            showText ('p5', `R$ ${realInputValue} hoje equivale à US$ ${dolarConversion}.`)
            realInput.value = '';
        }
    }
});

//Square perimeter and area
let squareHeightInput = document.getElementById('squareHeight');
let squareWeightInput = document.getElementById('squareWeight');
let squareHeightNumber;
let squareWeightNumber;

addEventListener ('keydown', function inputSquareHeight(event) {
    if (event.key === 'Enter' && squareWeightInput.hasAttribute('disabled')) {
        squareHeightNumber = parseInt(squareHeightInput.value);
        squareHeight.disabled = true;
        squareWeight.disabled = false;
        showText ('p6', 'Agora digite a largura do retângulo, também em cm:');
        squareWeight.focus();
    }
});

addEventListener ('keydown', function inputSquareWeight(event) {
    if (event.key === 'Enter') {
        if (squareHeightNumber != null) {
            squareWeightNumber = parseInt(squareWeightInput.value);

            if (!isNaN(squareWeightNumber)) {
            let squarePerimeter = (squareHeightNumber * 2 + squareWeightNumber * 2) / 100;
            let squareArea = squareHeightNumber * squareWeightNumber / 10000;
            squareWeight.disabled = true;
            showText ('p6', `O perímetro do retângulo é ${squarePerimeter.toFixed(2)}m, e sua área ${squareArea.toFixed(2)}m\u00B2.`);
            }
        }
    }
});

//Circle perimeter and area
let inputRay = document.getElementById('rayLength');

window.addEventListener('keydown', function circleRay (event) {
    if (event.key === 'Enter' && inputRay.value > 0) {
        let radius = parseFloat(inputRay.value); 
        let circlePerimeter = radius * 2 * 3.14 / 100;
        let circleArea = radius * radius * 3.14 / 10000;
        showText ('p9', `O perímetro do círculo é ${circlePerimeter.toFixed(2)}m, e sua área ${circleArea.toFixed(2)}m\u00B2.`);
        inputRay.focus();
    }
});

//Multiplication table
let numberInput = document.getElementById('multNumberInput');
window.addEventListener('keydown', function multiplicationTable(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        let multiplier = parseFloat(numberInput.value);
        if (multiplier > 99) {
            showText('p11', 'Digite um número menor que 100');
        } else if (multiplier < 1) {
            showText('p11', 'Digite um número maior que 1');
        } else {
            let multiplicationTableText = '';
            for (let i = 1; i <= 99; i++) {
                let result = i * multiplier;
                multiplicationTableText += `${multiplier} x ${i} = ${result}\n`;
            }
            showText('p11', multiplicationTableText.slice(0, -1));
        }
    }
});

//Show texts
function showText(tag, text) {
    let htmlText = document.querySelector(tag);
    htmlText.innerHTML = text;
}

showText ('h1', 'Desafio 30.10.2023');
showText ('h2', 'Cálculo de IMC');
showText ('p1', 'Digite a sua altura em cm:');
showText ('h3', 'Qual o fator?');
showText ('p2', 'Digite um número para calcularmos seu valor fatorado:');
showText ('h4', 'Real para Dólar');
showText ('p4', 'Digite um valor em reais para transformamos em dólar (cotação 1.00 - 4.80):');
showText ('h5', 'Área e perímetro de um retângulo');
showText ('p6', 'Digite a altura em cm do retângulo:');
showText ('h6', 'Área e perímetro de um círculo');
showText ('p8', 'Digite o número do raio em cm do círculo:');
showText ('h7', 'Tabuada 1-99');
showText ('p10', 'Digite um número de 1 a 99 para calcularmos seus multiplos:')

//Open the Modals
function openModal(id) {
    let modal = document.getElementById(id);
    setTimeout(function () {
        modal.style.display = 'flex';
    }, 150);
}

//Closing the Modals
function closeModal(modalId, ContainerId, event) {
    let modal = document.getElementById(modalId);
    let containerModal = document.getElementById(ContainerId);
    if (event && event.which === 1 && event.target != containerModal && !containerModal.contains(event.target)) {
        modal.style.display = 'none';
    }
}

function modalListener (modalId, containerId) {
    window.addEventListener('mousedown', function(event) {
        closeModal(modalId, containerId, event);
    });
}

modalListener('modalOne', 'modalOneContainer');

function closeModalButton(id) {
    let modal = document.getElementById(id);
    if (modal) {
        setTimeout(function() {
            modal.style.display = 'none';
            // 1st Modal
            showText('p1', 'Digite a sua altura em cm:');
            heightInput.value = '';
            weightInput.value = '';
            heightInput.disabled = false;
            weightInput.disabled = true;
            // 2nd Modal
            showText('p3', '');
            fatoredNumberInput.value = '';
            // 3rd Modal
            showText('p5', '');
            realInput.value = '';
            //4th Modal
            showText('p6', 'Digite a altura em cm do retângulo:');
            squareHeightInput.value = '';
            squareWeightInput.value = '';
            squareHeight.disabled = false;
            squareWeight.disabled = true;
            //5th Modal
            showText ('p9', '');
            inputRay.value = '';
            //6th Modal
            showText ('p11', '');
            numberInput.value = '';
        }, 150);
    }
}

document.getElementById('closeModal').addEventListener('click', closeModalButton);