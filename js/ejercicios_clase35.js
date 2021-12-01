// Ejercicios Clase 35

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
const stringLength = (string) => (typeof string === "string" ? string.length : "El parametro ingresado no es una cadena válida");

// Pruebas
console.group("Ejercicio 1");
console.log(stringLength("Hola mundo"));
console.log(stringLength(""));
console.log(stringLength(25));
console.log(stringLength());
console.groupEnd();

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
const cutString = (string, char) => (stringLength(string) > char ? string.substring(0, char) : "No se puede cortar el valor ingresado.");

// Pruebas
console.group("Ejercicio 2");
console.log(cutString("Hola Mundo", 4));
console.log(cutString("Hola Mundo", 2));
console.log(cutString("Hola Mundo", "12"));
console.log(cutString(3, 5));
console.groupEnd();

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const separarCadena = (string, separator) => (stringLength(string) > 0 ? string.split(separator) : "La cadena no se puede separar.");

// Pruebas
console.group("Ejercicio 3");
console.log(separarCadena("hola que tal", " "));
console.log(separarCadena("holaquetal", " "));
console.log(separarCadena("", ""));
console.log(separarCadena("String", ","));
console.groupEnd();

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
const repeatString = (string = "", repeat = undefined) => {
   if (!string) return console.warn("No ingresaste una cadena de texto");
   if (repeat === 0) return console.error("El número de veces no puede ser 0");
   if (isNaN(repeat)) return console.error("El número de veces debe ser un entero");
   if (Math.sign(repeat) === -1) return console.error("El número de veces no puede ser negativo");
   for (let i = 1; i <= repeat; i++) console.info(`${string}, ${i}`);
};

// Pruebas
console.group("Ejercicio 4");
repeatString("Hola Mundo", 3);
repeatString("", 3);
repeatString("Hola Mundo", "q");
repeatString(3, 0);
console.groupEnd();
