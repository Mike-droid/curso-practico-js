//* Calcular altura de triángulo isosceles => sqrt(a^2 - [(b/2)^2])
var alturaTrianguloIsoceles = function () {
    var inputLadosIguales = document.getElementById('inputLadosIguales');
    var inputBase = document.getElementById('inputBase');
    var valorLados = Number.parseInt(inputLadosIguales === null || inputLadosIguales === void 0 ? void 0 : inputLadosIguales.value);
    var valorBase = Number.parseInt(inputBase === null || inputBase === void 0 ? void 0 : inputBase.value);
    if (valorBase === valorLados) {
        console.log('No pueden medir lo mismo');
    }
    else {
        var altura = Math.sqrt(Math.pow(valorLados, 2) - Math.pow(valorBase / 2, 2));
        console.log('Altura: ', altura);
        return altura;
    }
};
