//* Código del cuadrado
var perimetroCuadrado = function (lado) {
    return lado * 4;
};
var areaCuadrado = function (lado) {
    return Math.pow(lado, 2);
};
//*Código del triángulo
var perimetroTriangulo = function (lado1, lado2, base) {
    return lado1 + lado2 + base;
};
var areaTriangulo = function (base, altura) {
    return (base * altura) / 2;
};
//* Código del círculo
var perimetroCirculo = function (radio) {
    return Math.PI * (radio * 2);
};
var areaCirculo = function (radio) {
    return Math.PI * Math.pow(radio, 2);
};
//* Interactuando con HTML
function calcularPerimetroCuadrado() {
    var inputCuadrado = document.getElementById('inputCuadrado');
    var value = inputCuadrado === null || inputCuadrado === void 0 ? void 0 : inputCuadrado.value;
    var perimetro = perimetroCuadrado(Number.parseInt(value));
    alert(perimetro);
}
function calcularAreaCuadrado() {
    var inputCuadrado = document.getElementById('inputCuadrado');
    var value = inputCuadrado === null || inputCuadrado === void 0 ? void 0 : inputCuadrado.value;
    var area = areaCuadrado(Number.parseInt(value));
    alert(area);
}
function calcularPerimetroTriangulo() {
    var ladoT1 = document.getElementById('lado1T');
    var value1 = ladoT1 === null || ladoT1 === void 0 ? void 0 : ladoT1.value;
    var ladoT2 = document.getElementById('lado2T');
    var value2 = ladoT2 === null || ladoT2 === void 0 ? void 0 : ladoT2.value;
    var base = document.getElementById('baseT');
    var value3 = base === null || base === void 0 ? void 0 : base.value;
    var perimetro = perimetroTriangulo(Number.parseInt(value1), Number.parseInt(value2), Number.parseInt(value3));
    alert(perimetro);
}
function calcularAreaTriangulo() {
    var base = document.getElementById('baseT');
    var value_b = base === null || base === void 0 ? void 0 : base.value;
    var altura = document.getElementById('alturaT');
    var value_a = altura === null || altura === void 0 ? void 0 : altura.value;
    var area = areaTriangulo(Number.parseInt(value_b), Number.parseInt(value_a));
    alert(area);
}
function calcularPerimetroCirculo() {
    var radio = document.getElementById('radioC');
    var value = radio === null || radio === void 0 ? void 0 : radio.value;
    var perimetro = perimetroCirculo(Number.parseInt(value));
    alert(perimetro);
}
function calcularAreaCirculo() {
    var radio = document.getElementById('radioC');
    var value = radio === null || radio === void 0 ? void 0 : radio.value;
    var area = areaCirculo(Number.parseInt(value));
    alert(area);
}
