var calcularMediaArmonica = function (lista) {
    var n = lista.length;
    var suma_lista = 0;
    for (var index = 0; index < lista.length; index++) {
        suma_lista += (1 / lista[index]);
    }
    var mediaArmonica = n / suma_lista;
    return mediaArmonica;
};
console.log("Media arm\u00F3nica de [1,2,3,4]: " + calcularMediaArmonica([1, 2, 3, 4]));
