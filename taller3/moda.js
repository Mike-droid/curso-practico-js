var calcularModa = function (lista) {
    var listaCount = {}; //*Especificamos la estructura que tendrá el objecto con sus llaves y valores
    lista.map(function (elemento) {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        }
        else {
            listaCount[elemento] = 1;
        }
    });
    var lista1Array = Object.entries(listaCount).sort(function (valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];
    });
    var moda = lista1Array[lista1Array.length - 1];
    return moda;
};
