function calc() {
    var temperaturaCelsius = parseFloat(document.getElementById('valorDigitado').value);
    
    temperaturaFahrenheit = (temperaturaCelsius * 1.8) + 32
document.form.temperatura.value=temperaturaFahrenheit + " F";
}

