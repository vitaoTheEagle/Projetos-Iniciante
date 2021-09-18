var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    var elementoResultado = document.getElementById("resultado");

    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você Acertou";
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você deve digitar um número entre 1 e 10";
    } else if (chute < numeroSecreto) {
        elementoResultado.innerHTML = "O número secreto é maior que " + chute;
    } else if (chute > numeroSecreto) {
        elementoResultado.innerHTML = "O número secreto é menor que " + chute;
    } else {
        elementoResultado.innerHTML = "Errou, o número secreto era " + numeroSecreto;
    }
}