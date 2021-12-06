// 9. Programa una función que obtenga un numero aleatorio entre 501 y 600.
const miRandom = () => console.log(`El número obetenido es: ${Math.floor(Math.random() * (600 - 501)) + 501}`);

// Pruebas
console.group("Ejercicio 9");
miRandom();
console.groupEnd();

// 10. Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicua = (number = "") => {
   if (!number) return console.error("Debes ingresar un número");
   if (isNaN(number)) return console.error("Debes ingresar un número");

   let newNumber = number.toString().split("").reverse().join("");
   newNumber = parseInt(newNumber);

   return number === newNumber ? console.log(`El número ${number} es capicúa de ${newNumber}`) : console.info(`El número ${number} no es capicúa`);
};

// Pruebas
console.group("Ejercicio 10");
capicua(2002);
capicua(1988);
capicua("No es un número");
console.groupEnd();

// 11.   Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (number = 0) => {
   if (!number) return console.error("Debes ingresar un número");
   if (isNaN(number)) return console.error("Debes ingresar un número");
   if (!Number.isInteger(number)) return console.error("Debes ingresar un número entero");
   if (number <= 0) return console.error("Debes ingresar un número mayor a cero");

   let result = 1;
   for (let i = 1; i <= number; i++) result *= i;

   return console.log(`El factorial de ${number} es ${result}`);
};

// Pruebas
console.group("Ejercicio 11");
factorial(5);
factorial(10);
factorial("Hola Mundo");
factorial();
factorial(-20);
console.groupEnd();
