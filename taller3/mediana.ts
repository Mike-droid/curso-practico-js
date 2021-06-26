const calcularMediana = (lista: Array<number>): number => {
  lista.sort()
  const mitadLista: number = Math.floor(lista.length / 2)
  const esPar = (n: number): boolean => { return n % 2 === 0 ? true : false }
  const medianaLista: number = esPar(lista.length) ? (lista[mitadLista-1] + lista[mitadLista]) / 2 : lista[mitadLista]
  return medianaLista
}