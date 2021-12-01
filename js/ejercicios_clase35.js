// Ejercicios Clase 35

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
stringLength = (string) => (typeof string === "string" ? string.length : "El parametro ingresado no es una cadena válida");
console.log(stringLength("Hola mundo"));
console.log(stringLength(""));
console.log(stringLength(25));
console.log(stringLength());

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
cutString = (string, char) => (stringLength(string) > char ? string.substring(0, char) : "No se puede cortar el valor ingresado.");
console.log(cutString("Hola Mundo", 4));
console.log(cutString("Hola Mundo", 2));
console.log(cutString("Hola Mundo", "12"));
console.log(cutString(3, 5));

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
separarCadena = (string, separator) => (stringLength(string) > 0 ? string.split(separator) : "La cadena no se puede separar.");
console.log(separarCadena("hola que tal", " "));
console.log(separarCadena("holaquetal", " "));
console.log(separarCadena("", ""));
console.log(separarCadena("String", ","));

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
repeatString = (string, i) => (stringLength(string) > 0 && Number.isInteger(i) ? `${string} `.repeat(i) : "Imposible repetir la cadena.");
console.log(repeatString("Hola Mundo", "q"));
console.log(repeatString(3, 3));
console.log(repeatString("Hola Mundo", 3));
console.log(repeatString("Cadena repetida", 4));
