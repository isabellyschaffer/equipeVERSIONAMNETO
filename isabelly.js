let NumeroMagico;
let adivinhação;
let modoDoJogo;

function startGame(modo) {
    modoDoJogo = modo;
    if (modo === 'pvp') {
        let NumeroMagicoInput = prompt("Player 1, digite o número mágico: \n FECHE OS OLHOS PLAYER 2!!!!!!!!");
        NumeroMagico = parseInt(NumeroMagicoInput);
        document.getElementById('game-area').style.display = 'block';
    } else if (modo === 'pve') {
        document.getElementById('dificuldade-seleção').style.display = 'block';
        return; 
    }
    adivinhação = 0;
    setStatus('');
}

function setDifficulty(maxNumber) {
    NumeroMagico = Math.floor(Math.random() * maxNumber) + 1; 
    document.getElementById('dificuldade-seleção').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
}

function startComputerGame() {
    let numeroDoUsuario = parseInt(prompt("Digite um número entre 1 e 100 para o computador adivinhar:"));
    if (isNaN(numeroDoUsuario) || numeroDoUsuario < 1 || numeroDoUsuario > 100) {
        setStatus('Por favor, digite um número válido entre 1 e 100.');
        return;
    }
    adivinhação = 0;
    document.getElementById('game-area').style.display = 'block';
    computadorAdivinhador(numeroDoUsuario);
}

function computadorAdivinhador(numeroDoUsuario) {
    let min = 1;
    let max = 100;
    let computadorAdivinhador;
    while (true) {
        computadorAdivinhador = Math.floor((min + max) / 2);
        adivinhação++;
        if (computadorAdivinhador === numeroDoUsuario) {
            setStatus(`O computador acertou seu número (${numeroDoUsuario}) em ${adivinhação} tentativas.`);
            break;
        } else if (computadorAdivinhador < numeroDoUsuario) {
            min = computadorAdivinhador + 1;
            alert(computadorAdivinhador)
        } else {
            max = computadorAdivinhador - 1; 
            alert(computadorAdivinhador)
        }
    }
}

function checkGuess() {
    let guessInput = parseInt(document.getElementById('guess').value);
    if (isNaN(guessInput)) {
        setStatus('Por favor, digite um número válido.');
        return;
    }

    adivinhação++;

    if (modoDoJogo === 'pvp') {
        if (guessInput === NumeroMagico) {
            setStatus(`Parabéns! Você acertou o número mágico em ${adivinhação} tentativas.`);
        } else if (guessInput < NumeroMagico) {
            setStatus('Tente um número mais alto.');
        } else {
            setStatus('Tente um número mais baixo.');
        }
    } else if (modoDoJogo === 'pve') {
        if (guessInput === NumeroMagico) {
            setStatus(`Parabéns! Você acertou o número mágico em ${adivinhação} tentativas.`);
        } else if (guessInput < NumeroMagico) {
            setStatus('Tente um número mais alto.');
        } else {
            setStatus('Tente um número mais baixo.');
        }
    }
}

function setStatus(message) {
    document.getElementById('status').innerText = message;
}
