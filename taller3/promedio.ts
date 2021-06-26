const calcularMediaAritmetica = (lista: Array<number>): number => {
  const sumaLista: number = lista.reduce(
    function(valorAcumulado: number = 0, nuevoElemento: number){
      return valorAcumulado + nuevoElemento
    }
  )

  const promedioLista: number = sumaLista / lista.length
  return promedioLista
}