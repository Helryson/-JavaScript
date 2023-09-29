let opcao1 = document.getElementById("opcao1");
let opcao2 = document.getElementById("opcao2");
let inputCelsius = document.getElementById("valor1");
let inputFahrenheit = document.getElementById("valor2");
opcao2.value = "fahrenheitF"

function converterCelsiusParaFahrenheit(valorCelsius) {
    return (valorCelsius * 1.8) + 32;
}

function converterCelsiusParaKelvin(valorCelsius) {
    return valorCelsius - 273.15;
}

function converterCelsiusParaCelsius(valorCelsius){
    return valorCelsius;
}

function converterFahrenheitParaCelsius(valorFahrenheit) {
    return (valorFahrenheit - 32) / 1.8;
}

function converterFahrenheitParaFahrenheit(valorFahrenheit){
    return valorFahrenheit;
}

function converterFahrenheitParaKelvin(valorFahrenheit) {
    return (valorFahrenheit - 32) / 1.8 + 273.15;
}

function converterKelvinParaCelsius(valorKelvin) {
    return valorKelvin - 273.15;
}

function converterKelvinParaFahrenheit(valorKelvin) {
    return (valorKelvin - 273.15) * 1.8 + 32;
}

function converterKelvinParaKelvin(valorKelvin){
    return valorKelvin;
}

function atualizarConversao() {
    let valorCelsius = parseFloat(inputCelsius.value);

    if (opcao1.value === "celsiusC") {
        if (opcao2.value === "fahrenheitF") {
            inputFahrenheit.value = converterCelsiusParaFahrenheit(valorCelsius);
        } else if (opcao2.value === "kelvinK") {
            inputFahrenheit.value = converterCelsiusParaKelvin(valorCelsius);
        } else {
            inputFahrenheit.value = valorCelsius;
        }
    } else if (opcao1.value === "fahrenheitF") {
        if (opcao2.value === "celsiusC") {
            inputCelsius.value = converterFahrenheitParaCelsius(parseFloat(inputFahrenheit.value));
        } else if (opcao2.value === "kelvinK") {
            inputCelsius.value = converterFahrenheitParaKelvin(parseFloat(inputFahrenheit.value));
        } else {
            inputCelsius.value = parseFloat(inputFahrenheit.value);
        }
    } else if (opcao1.value === "kelvinK") {
        if (opcao2.value === "celsiusC") {
            inputCelsius.value = converterKelvinParaCelsius(parseFloat(inputFahrenheit.value));
        } else if (opcao2.value === "fahrenheitF") {
            inputFahrenheit.value = converterKelvinParaFahrenheit(valorCelsius);
        } else {
            inputFahrenheit.value = parseFloat(inputFahrenheit.value);
        }
    }
}

inputCelsius.value = 0;
inputFahrenheit.value = 32;

inputCelsius.addEventListener("input", atualizarConversao);
inputFahrenheit.addEventListener("input", atualizarConversao);

opcao1.addEventListener("change", atualizarConversao);
opcao2.addEventListener("change", atualizarConversao);