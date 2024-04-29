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
