const resultadosInversionesParrafo = document.getElementById('resultadosInversiones') as HTMLParagraphElement

const interesSimple = (capital: number, interes: number, tiempo: number): number => {
  interes = interes / 100
  return capital * interes * tiempo
}

const interesCompuesto = (capital: number, interes: number, tiempo: number): number => {
  interes = interes / 100
  return capital * Math.pow((1+interes),tiempo)
}

function calculaInversiones() {
  const inputDinero = document.getElementById('inversion_inicial') as HTMLInputElement
  const valueInputDinero: number = parseInt(inputDinero.value)

  const inputTiempo = document.getElementById('tiempo_invertido') as HTMLInputElement
  const valueInputTiempo: number = parseInt(inputTiempo.value)

  const inputInteres = document.getElementById('tasa_interes') as HTMLInputElement
  const valueInteres: number = parseInt(inputInteres.value)

  const resultadoInteresSimple = interesSimple(valueInputDinero, valueInteres, valueInputTiempo)
  const resultadoInteresCompuesto = interesCompuesto(valueInputDinero, valueInteres, valueInputTiempo)
  resultadosInversionesParrafo.innerText = `Inversión obtenida con interés simple: $${resultadoInteresSimple} | Inversión obtenida con interés compuesto: $${resultadoInteresCompuesto}`
}
