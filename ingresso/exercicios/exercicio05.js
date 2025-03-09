function converterTemperatura() {

    let temperatura = parseInt(document.getElementById("temperatura").value, 10);
    let unidade = document.getElementById("unidade").value;

    if(unidade == "celsius") {
        alert("Celsius para Fahrenheit: " + converterCelsiusParaFahrenheit(temperatura));
    } else if(unidade == "fahrenheit"){
        alert("Fahrenheit para Celsius: " + converterFahrenheitParaCelsius(temperatura));
    }
}

function converterCelsiusParaFahrenheit(temperatura) {
    return (temperatura * 9/5) + 32;
}

function converterFahrenheitParaCelsius(temperatura) {
    return (temperatura - 32) * 5/9;
}