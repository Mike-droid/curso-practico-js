# Curso práctico de JavaScript

## Antes de empezar

### ¿Cuál es tu sueño con JavaScript?

Vamos a poner en práctica todo lo que vimos en el curso básico de JS.

Requisitos:

- Prework
- Pensamiento lógico
- Programación básica
- HTML Básico
- JS Básico
- Git y Github

### Prueba de JavaScript

#### Variables y operaciones

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve? => Es un espacio en memoria que almacena un valor
- ¿Cuál es la diferencia entre declarar e inicializar una variable? => Al declarar la variablae, solamente la estoy creando pero NO le doy un valor. Cuanod la inicialiazo la creo y también le doy un valor.
- ¿Cuál es la diferencia entre sumar números y concatenar strings? => `2 + 2 = 4` esto es una suma. `'2' + '2' = '22'` esto es una concatenación
- ¿Cuál operador me permite sumar o concatenar? => `+`

2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre => `let first_name: string`
- Apellido => `let last_name: string`
- Nombre de usuario en Platzi => `let user_name: string`
- Edad => `let age: number`
- Correo electrónico => `let e_mail: string`
- Mayor de edad => `let adult_age: number`
- Dinero ahorrado => `let saved_money: number`
- Deudas => `let debts: number`

3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

Ya lo hice pero en TypeScript jeje.

4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

Nombre completo:

```typescript
let first_name: string = 'Miguel';
let last_name: string = 'Reyes';
let full_name: string = `${first_name} ${last_name}`
```

Dinero real:

```typescript
let saved_money: number = 500;
let debts: number = 100;
let real_money: number = saved_money - debts;
```

---

#### Funciones

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función? => Un bloque de código con un fin específico
- ¿Cuándo me sirve usar una función en mi código? => ¿Siempre?
- ¿Cuál es la diferencia entre parámetros y argumentos de una función? => Cuando creas la función, se llaman parametros, cuando llamas a la función, se llaman argumentos.

2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```javascript
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

```typescript
export function greetingsNickName(name:string, lastname:string, nickname:string): string {
  const complete_name: string = `${name} ${lastname}`
  return `Mi nombre es ${complete_name}, pero prefiero que me digas ${nickname}.`;
}

console.log(greetingsNickName('Miguel', 'Reyes', 'Mike'));
```

---

#### Condicionales

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una condicional? => Una sección del código donde evaluación una expresión, dependiendo del resultado, el código tomará una decisión u otra.
- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias? => if, else, switch => if va junto con else, suelen evaluarse una seguida de otra, mientras que switch tiene casos bases, al final hacen lo mismo pero con sintaxís diferente.
- ¿Puedo combinar funciones y condicionales? Claro que sí.

2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```javascript
const tipoDeSuscripcion = "basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "Expert+":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

```typescript
const tipoDeSuscripcion: string = "basic";

if(tipoDeSuscripcion === 'Free'){
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === 'Basic'){
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === 'Expert'){
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if(tipoDeSuscripcion === 'Expert+'){
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```

3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

```typescript
const tipoDeSuscripciones: string[] = ['Free', 'Basic', 'Expert', 'Expert+'];

const suscripcion: string = 'Expert+'

suscripcion !== 'Free' ? console.log('Puedes tomar muchos cursos') : console.log('Estás limitado en los cursos')
```

---

#### Cilos

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo? => Un bloque de código que se ejecuta una o más veces hasta que se deje de cumplir una condición
- ¿Qué tipos de ciclos existen en JavaScript? => for, for each, while
- ¿Qué es un ciclo infinito y por qué es un problema? => Un ciclo que nunca terminará y básicamente hace que nuestra computadora se congele por las infinitas operaciones que tiene que realizar
- ¿Puedo mezclar ciclos y condicionales? => Claro que sí

2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```javascript
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
```

```javascript
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

```typescript
let i: number = 0;
while(i < 5) {
  console.log("El valor de i es: ", i);
  i++;
}
```

```typescript
let i: number = 10;
while(i >= 2) {
  console.log("El valor de i es: ", i);
  i--;
}
```

3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

Pista: puedes usar la función prompt de JavaScript.

```javascript
function Suma2y2() {
  let result;
  do {
    result = parseInt(prompt('¿Cuánto es 2 + 2?: '));
  } while(result !== 4);
  if (result === 4) {
    console.log('¡Es correcto!');
  }
```

---

#### Listas

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array? => Es una colección de elementos que se encuentran seguidos en memoria, se representan como []
- ¿Qué es un objeto? => Es una colección de claves y valores, a cada clave se le asigna un valor {'name': 'Miguel'}
- ¿Cuándo es mejor usar objetos o arrays? => Depende del caso
- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays? => Claro que sí

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento:

```typescript
export function imprimePrimerElemento(cositas: Array<any>) {
  return cositas[0];
}

const arreglo:Array<any> = ['primero', 'segundo']

console.log(imprimePrimerElemento(arreglo))
```

3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```typescript
export function muestraArrayCompleto(arreglo:Array<any>) {
  for (let index = 0; index < arreglo.length; index++) {
    console.log(arreglo[index])
  }
}
muestraArrayCompleto([1,2,3,4])
```

4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```typescript
export function muestraObjetoCompleto(objeto: Object) {
  let key: keyof typeof objeto
  for (key in objeto) {
    console.log(`${key} => ${objeto[key]}`)
  }
}
muestraObjetoCompleto({name:'Miguel', lastname: 'Reyes'})
```

### Configuración del entorno de desarrollo
