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

