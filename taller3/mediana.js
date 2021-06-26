var calcularMediana = function (lista) {
    lista.sort();
    var mitadLista = Math.floor(lista.length / 2);
    var esPar = function (n) { return n % 2 === 0 ? true : false; };
    var medianaLista = esPar(lista.length) ? (lista[mitadLista - 1] + lista[mitadLista]) / 2 : lista[mitadLista];
    return medianaLista;
};
