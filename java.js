let magicNumber;
let guessCount;
let gameMode;

function startGame(mode) {
    gameMode = mode;
    if (mode === 'pvp') {
        let magicNumberInput = prompt("Player 1, digite o número mágico:");
        magicNumber = parseInt(magicNumberInput);
        document.getElementById('game-area').style.display = 'block';
    } else if (mode === 'pve') {
        document.getElementById('difficulty-selection').style.display = 'block';
        return; 
    }
    guessCount = 0;
    setStatus('');
}

function setDifficulty(maxNumber) {
    magicNumber = Math.floor(Math.random() * maxNumber) + 1; 
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
}

function startComputerGame() {
    let userNumber = parseInt(prompt("Digite um número entre 1 e 100 para o computador adivinhar:"));
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
        setStatus('Por favor, digite um número válido entre 1 e 100.');
        return;
    }
    guessCount = 0;
    document.getElementById('game-area').style.display = 'block';
    computerGuess(userNumber);
}

function computerGuess(userNumber) {
    let min = 1;
    let max = 100;
    let computerGuess;
    while (true) {
        computerGuess = Math.floor((min + max) / 2);
        guessCount++;
        if (computerGuess === userNumber) {
            setStatus(`O computador acertou seu número (${userNumber}) em ${guessCount} tentativas.`);
            break;
        } else if (computerGuess < userNumber) {
            min = computerGuess + 1;
        } else {
            max = computerGuess - 1;
        }
    }
}

function checkGuess() {
    let guessInput = parseInt(document.getElementById('guess').value);
    if (isNaN(guessInput)) {
        setStatus('Por favor, digite um número válido.');
        return;
    }

    guessCount++;

    if (gameMode === 'pvp') {
        if (guessInput === magicNumber) {
            setStatus(`Parabéns! Você acertou o número mágico em ${guessCount} tentativas.`);
        } else if (guessInput < magicNumber) {
            setStatus('Tente um número mais alto.');
        } else {
            setStatus('Tente um número mais baixo.');
        }
    } else if (gameMode === 'pve') {
        if (guessInput === magicNumber) {
            setStatus(`Parabéns! Você acertou o número mágico em ${guessCount} tentativas.`);
        } else if (guessInput < magicNumber) {
            setStatus('Tente um número mais alto.');
        } else {
            setStatus('Tente um número mais baixo.');
        }
    }
}

function setStatus(message) {
    document.getElementById('status').innerText = message;
}