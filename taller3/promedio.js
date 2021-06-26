var calcularMediaAritmetica = function (lista) {
    var sumaLista = lista.reduce(function (valorAcumulado, nuevoElemento) {
        if (valorAcumulado === void 0) { valorAcumulado = 0; }
        return valorAcumulado + nuevoElemento;
    });
    var promedioLista = sumaLista / lista.length;
    return promedioLista;
};
