var resultadosInversionesParrafo = document.getElementById('resultadosInversiones');
var interesSimple = function (capital, interes, tiempo) {
    interes = interes / 100;
    return capital * interes * tiempo;
};
var interesCompuesto = function (capital, interes, tiempo) {
    interes = interes / 100;
    return capital * Math.pow((1 + interes), tiempo);
};
function calculaInversiones() {
    var inputDinero = document.getElementById('inversion_inicial');
    var valueInputDinero = parseInt(inputDinero.value);
    var inputTiempo = document.getElementById('tiempo_invertido');
    var valueInputTiempo = parseInt(inputTiempo.value);
    var inputInteres = document.getElementById('tasa_interes');
    var valueInteres = parseInt(inputInteres.value);
    var resultadoInteresSimple = interesSimple(valueInputDinero, valueInteres, valueInputTiempo);
    var resultadoInteresCompuesto = interesCompuesto(valueInputDinero, valueInteres, valueInputTiempo);
    resultadosInversionesParrafo.innerText = "Inversi\u00F3n obtenida con inter\u00E9s simple: $" + resultadoInteresSimple + " | Inversi\u00F3n obtenida con inter\u00E9s compuesto: $" + resultadoInteresCompuesto;
}
