import colombia from "./salarios"

//* Helpers
function esPar(numerito:number) {
  return numerito % 2 === 0
}

const calculaMediaAritmetica = (lista: Array<number>): number => {
  const sumaLista: number = lista.reduce(
    function(valorAcumulado: number = 0, nuevoElemento: number){
      return valorAcumulado + nuevoElemento
    }
  )

  const promedioLista: number = sumaLista / lista.length
  return promedioLista
}

//*Mediana general
const salariosColombia = colombia.map(
  function (personita) {
    return personita.salary
  }
)

const salariosColombiaOrdenados = salariosColombia.sort(
  function (salaryA: number, salaryB: number): number {
    return salaryA - salaryB
  }
)

//* Calculadora de mediana
function medianaSalarios(lista: Array<number>) {
  const mitad = Math.floor(lista.length / 2)

  if (esPar(lista.length)) {
    const personitaMitad1 = lista[mitad - 1]
    const personitaMitad2 = lista[mitad]
    const media = calculaMediaAritmetica([personitaMitad1, personitaMitad2])
    return media
  } else {
    const personitaMitad = lista[mitad]
    return personitaMitad
  }
}

const medianaGeneralColombia = medianaSalarios(salariosColombiaOrdenados)


//* Mediana del top 10%
const spliceStart: number = (salariosColombiaOrdenados.length * 90) / 100
const spliceCount: number = salariosColombiaOrdenados.length - spliceStart

const salariosColombiaTop10 = salariosColombiaOrdenados.splice(spliceStart, spliceCount)
const medianaTop10Colombia = medianaSalarios(salariosColombiaTop10)

console.log({
  'Mediana general de salarios en Colombia:' : medianaGeneralColombia,
  'Mediana del top 10% de salario en Colombia:' : medianaTop10Colombia
})