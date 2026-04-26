// ejercicio 1: declarar variables

let nombre = "jose villadiego";
let edad = 27;
let estoyEstudiandoJS = true;
 console.log("Hola mi nombre es " + nombre + " y tengo " + edad + " años de edad y la respuesta a la pregunta '¿estoy estudiando JS?' es " + estoyEstudiandoJS);

 // ejercicio 2: array y objeto

 let comidasFavoritas = ["pizza", "pasta", "quesos", "lacteos", "carnes"];


 let producto = {
  nombre: "Laptop",
  precio: 2500,
  disponible: true
};
console.log("Comidas favoritas:", comidasFavoritas);
console.log("Producto:", producto);

// ejercicio 3: condicionales

let añosEdad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// ejercicio 4: ciclos
for (let i = 1; i <= 20; i++) {
  console.log(i);
}


// ejercicio 5: funciones

function sumar(a, b) {
  return a + b;
}

let resultado = sumar(5, 10);
console.log(resultado);

// mini reto: calculadora básica

// Sumar
function sumar(a, b) {
  return a + b;
}

// Restar
function restar(a, b) {
  return a - b;
}

// Multiplicar
function multiplicar(a, b) {
  return a * b;
}

// Dividir
function dividir(a, b) {
  return a / b;
}

// Llamadas e impresión en consola
console.log("Suma:", sumar(10, 5));
console.log("Resta:", restar(10, 5));
console.log("Multiplicación:", multiplicar(10, 5));
console.log("División:", dividir(10, 5));

