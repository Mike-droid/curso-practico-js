const calcularModa = (lista: Array<number>): Array<string|number> => {
  const listaCount: {[key: string]: number} = {}; //*Especificamos la estructura que tendrá el objecto con sus llaves y valores

  lista.map(function(elemento: number){
    if (listaCount[elemento]) {
      listaCount[elemento] += 1
    } else {
      listaCount[elemento] = 1
    }
  })

  const lista1Array = Object.entries(listaCount).sort(
    function (valorAcumulado, nuevoValor) {
      return valorAcumulado[1] - nuevoValor[1]
    }
  )

  const moda: Array<string|number> = lista1Array[lista1Array.length - 1]
  return moda
}