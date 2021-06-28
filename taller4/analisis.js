"use strict";
exports.__esModule = true;
var salarios_1 = require("./salarios");
//* Helpers
function esPar(numerito) {
    return numerito % 2 === 0;
}
var calculaMediaAritmetica = function (lista) {
    var sumaLista = lista.reduce(function (valorAcumulado, nuevoElemento) {
        if (valorAcumulado === void 0) { valorAcumulado = 0; }
        return valorAcumulado + nuevoElemento;
    });
    var promedioLista = sumaLista / lista.length;
    return promedioLista;
};
//*Mediana general
var salariosColombia = salarios_1["default"].map(function (personita) {
    return personita.salary;
});
var salariosColombiaOrdenados = salariosColombia.sort(function (salaryA, salaryB) {
    return salaryA - salaryB;
});
//* Calculadora de mediana
function medianaSalarios(lista) {
    var mitad = Math.floor(lista.length / 2);
    if (esPar(lista.length)) {
        var personitaMitad1 = lista[mitad - 1];
        var personitaMitad2 = lista[mitad];
        var media = calculaMediaAritmetica([personitaMitad1, personitaMitad2]);
        return media;
    }
    else {
        var personitaMitad = lista[mitad];
        return personitaMitad;
    }
}
var medianaGeneralColombia = medianaSalarios(salariosColombiaOrdenados);
//* Mediana del top 10%
var spliceStart = (salariosColombiaOrdenados.length * 90) / 100;
var spliceCount = salariosColombiaOrdenados.length - spliceStart;
var salariosColombiaTop10 = salariosColombiaOrdenados.splice(spliceStart, spliceCount);
var medianaTop10Colombia = medianaSalarios(salariosColombiaTop10);
console.log({
    'Mediana general de salarios en Colombia:': medianaGeneralColombia,
    'Mediana del top 10% de salario en Colombia:': medianaTop10Colombia
});
