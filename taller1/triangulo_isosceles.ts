//* Calcular altura de triángulo isosceles => sqrt(a^2 - [(b/2)^2])

const alturaTrianguloIsoceles = (): number | void => {
  const inputLadosIguales = document.getElementById('inputLadosIguales') as HTMLInputElement
  const inputBase = document.getElementById('inputBase') as HTMLInputElement
  const valorLados: number = Number.parseInt(inputLadosIguales?.value)
  const valorBase: number = Number.parseInt(inputBase?.value)

  if (valorBase === valorLados) {
    console.log('No pueden medir lo mismo')
  } else {
    const altura = Math.sqrt(Math.pow(valorLados,2) - Math.pow(valorBase/2,2))
    console.log('Altura: ', altura)
    return altura
  }
}
