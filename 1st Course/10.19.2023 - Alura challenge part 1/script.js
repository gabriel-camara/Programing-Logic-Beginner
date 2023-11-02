function weekendScript() {
    let weekendDay = ['sábado', 'sabado','sab', 'dom', 'domingo'];
    let userDay = prompt ('Qual o dia da semana?').toLowerCase();

    if (weekendDay.includes(userDay)) {
        alert ('Bom fim de semana!');
    } else {
        alert ('Boa semana!');
    }

}

function numberScript() {
    let chosenNumber = prompt ('Escolha um número.');

    if (chosenNumber == 0) {
        alert (chosenNumber + ' é um número neutro.');
    } 
    if (chosenNumber > 0) {
        alert (chosenNumber + ' é um número positivo.');
    } 
    if (chosenNumber < 0) {
        alert (chosenNumber + ' é um número negativo.');
    }
}

let gameScore = 0;

function updateScoreDisplay() {
    let scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.textContent = 'Pontos: ' + gameScore;
}

function gameScript() {
    function getRandomNumber() {
        return parseInt(Math.random() * 100 + 1);
    }

    let secretNumber = getRandomNumber();
    console.log (secretNumber);
    let guess = prompt ('Escolha um número de 1 a 100.');
    let counter = 0;

    while (guess !== secretNumber) {
        if (guess === null || guess === "") {
            alert (`Você cancelou o jogo :(. O número secreto era ${secretNumber}.`);
            break;
        } else {
            guess = parseInt(guess);
            if (isNaN(guess)) {
                guess = prompt('Por favor, insira um número válido:');
                counter--;
            } else if (guess < secretNumber) {
                guess = prompt('Tente um número maior:');
            } else if (guess > secretNumber) {
                guess = prompt('Tente um número menor:');
            }
        }

        counter++;
        console.log ('Número de ciclos: ' + counter);

    }

    
    if (guess === secretNumber) {
        alert (`Parabéns! O número secreto era ${secretNumber}!`);

        if (counter < 5) {
        alert ('Parabéns! Você acertou o número secreto em menos de 5 tentativas. Você ganhou 10 pontos!');
        gameScore += 10;
        } else if ( counter < 10) {
        alert ('Muito bem! Você acertou o número secreto em menos de 10 tentativas. Você ganhou 5 pontos!');
        gameScore += 5;
        } else {
        alert ('Você acertou o número secreto e ganhou 1 ponto! Tente acertar em menos tentativas para ganhar mais pontos!');
        gameScore += 1;
        }
    }

    updateScoreDisplay ();
    console.log(gameScore);
}
