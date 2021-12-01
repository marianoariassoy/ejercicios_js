// Ejercios Clase 35

//  1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
miFuncion1 = (string) => {
   if (isNaN(string)) console.log(`La cadena de texto ingresda tiene ${string.length} caracteres`);
   else console.log("No es una cadena de texto");
};
miFuncion1("Hola mundo");

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
miFuncion2 = (string, num) => {
   if (isNaN(string)) console.log(`Se muestran ${num} caracteres de la cadena ${string}, el restulado es: "${string.substring(0, num)}"`);
   else console.log("No es una cadena de texto");
};
miFuncion2("Hola Mundo", 4);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
miFuncion3 = (string, separator) => console.log(string.split(separator));
miFuncion3("hola que tal", " ");

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
miFuncion4 = (string, num) => {
   let resultado = "";
   for (let i = 0; i < num; i++) resultado += " " + string;
   console.log(resultado);
};
miFuncion4("Hola Mundo", 3);
