const calcularMediaArmonica = (lista: number[]): number => {
  const n = lista.length
  let suma_lista = 0
  for (let index = 0; index < lista.length; index++) {
    suma_lista += (1/lista[index])
  }
  const mediaArmonica = n / suma_lista
  return mediaArmonica
}

console.log(`Media armónica de [1,2,3,4]: ${calcularMediaArmonica([1,2,3,4])}`)