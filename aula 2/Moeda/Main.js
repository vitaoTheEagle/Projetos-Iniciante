function Converter() {
      var moedaEscolhida = document.getElementById('moeda').value;
      var valorDigitado = parseFloat(document.getElementById("valor").value);

    if (moedaEscolhida === "dolar") {
      var valorEmReal = valorDigitado * 5;
      var valorConvertido = "o resultado em real é R$ " + valorEmReal
      var elementoValorConvertido = document.getElementById("valorConvertido");
      elementoValorConvertido.innerHTML = valorConvertido;
    }
    else if (moedaEscolhida === "euro") {
      var valorEmReal = valorDigitado * 6;
      var valorConvertido = "o resultado em real é R$ " + valorEmReal;
      var elementoValorConvertido = document.getElementById("valorConvertido");
      elementoValorConvertido.innerHTML = valorConvertido;
    }
    else if (moedaEscolhida === "bitcoin") {
      var valorEmReal = valorDigitado * 247339.12;
      var valorConvertido = "o resultado em real é R$ " + valorEmReal;
      var elementoValorConvertido = document.getElementById("valorConvertido");
      elementoValorConvertido.innerHTML = valorConvertido;
    }
  }