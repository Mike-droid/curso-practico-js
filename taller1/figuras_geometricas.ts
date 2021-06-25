//* Código del cuadrado
const perimetroCuadrado = (lado: number): number => {
  return lado * 4;
}

const areaCuadrado = (lado: number): number => {
  return Math.pow(lado, 2);
}

//*Código del triángulo
const perimetroTriangulo = (lado1: number, lado2: number, base: number): number => {
  return lado1 + lado2 + base;
}

const areaTriangulo = (base: number, altura: number): number =>{
  return (base*altura) / 2;
}

//* Código del círculo
const perimetroCirculo = (radio: number): number => {
  return Math.PI * (radio * 2);
}

const areaCirculo = (radio: number): number => {
  return Math.PI * Math.pow(radio, 2);
}


//* Interactuando con HTML
function calcularPerimetroCuadrado() {
  const inputCuadrado = document.getElementById('inputCuadrado') as HTMLInputElement;
  const value = inputCuadrado?.value;
  const perimetro = perimetroCuadrado(Number.parseInt(value));
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const inputCuadrado = document.getElementById('inputCuadrado') as HTMLInputElement;
  const value = inputCuadrado?.value;
  const area = areaCuadrado(Number.parseInt(value));
  alert(area);
}

function calcularPerimetroTriangulo() {
  const ladoT1 = document.getElementById('lado1T') as HTMLInputElement;
  const value1 = ladoT1?.value;

  const ladoT2 = document.getElementById('lado2T') as HTMLInputElement;
  const value2 = ladoT2?.value;

  const base = document.getElementById('baseT') as HTMLInputElement;
  const value3 = base?.value;

  const perimetro = perimetroTriangulo(Number.parseInt(value1), Number.parseInt(value2), Number.parseInt(value3));
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const base = document.getElementById('baseT') as HTMLInputElement;
  const value_b = base?.value;

  const altura = document.getElementById('alturaT') as HTMLInputElement;
  const value_a = altura?.value;

  const area = areaTriangulo(Number.parseInt(value_b), Number.parseInt(value_a));
  alert(area);
}

function calcularPerimetroCirculo() {
  const radio = document.getElementById('radioC') as HTMLInputElement;
  const value = radio?.value;

  const perimetro = perimetroCirculo(Number.parseInt(value));
  alert(perimetro);
}

function calcularAreaCirculo() {
  const radio = document.getElementById('radioC') as HTMLInputElement;
  const value = radio?.value;

  const area = areaCirculo(Number.parseInt(value));
  alert(area);
}