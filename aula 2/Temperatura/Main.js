function Converter() {
    var temperaturaEscolhida = document.getElementById('temperatura').value;
    var valorDigitado = parseFloat(document.getElementById("valor").value);

    if (temperaturaEscolhida === "fahrenheit") {
        var valorEmFahrenheit = (valorDigitado * 1.8) + 32;
        var valorConvertido = "o resultado em Fahrenheit é " + valorEmFahrenheit + " F";
        var elementoValorConvertido = document.getElementById("valorConvertido");
        elementoValorConvertido.innerHTML = valorConvertido;
    }
    else if (temperaturaEscolhida === "kelvin") {
        var valorEmKelvin = (valorDigitado + 273);
        var valorConvertido = "o resultado em Kelvin é " + valorEmKelvin + " K";
        var elementoValorConvertido = document.getElementById("valorConvertido");
        elementoValorConvertido.innerHTML = valorConvertido;
    }
}