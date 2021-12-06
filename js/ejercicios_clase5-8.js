// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const reverseString = (string = "") =>
   !string
      ? console.warn("No ingresaste una cadena de texto")
      : console.log(`La cadena de texto ingresada "${string}" invertida se lee "${string.split("").reverse().join("")}"`);

// Pruebas
console.group("Ejercicio 5");
reverseString("Hola Mundo");
reverseString("");
console.groupEnd();

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const countString = (string = "", search = "") => {
   if (!string) return console.warn("No ingresaste una cadena de texto");
   if (!search) return console.warn("No ingresaste una palabra a buscar");
   if (!isNaN(string)) return console.error("Debes ingresar una cadena de texto");
   if (!isNaN(search)) return console.error("Debes ingresar una palabra a buscar");

   let count = 0,
      newArray = string.split(" ");

   newArray.forEach((element) => {
      if (element == search) count++;
   });

   return count
      ? console.log(`La palabra "${search}" fue encontrada ${count} veces en la cadena "${string}"`)
      : console.info(`No se encontro la palabra "${search}" en la cadena "${string}"`);
};

// Pruebas
console.group("Ejercicio 6");
countString("hola mundo adios mundo", "mundo");
countString("hola mundo adios mundo", "adios");
countString("hola mundo adios mundo", "chau");
countString("", "");
countString("hola mundo adios mundo", "");
countString("hola mundo adios mundo", 2);
console.groupEnd();

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const esPalindromo = (string = "") => {
   if (!string) return console.warn("No ingresaste una cadena de texto");
   if (!isNaN(string)) return console.error("Debes ingresar una cadena de texto");

   string = string.toLocaleLowerCase();
   let newString = string.split("").reverse().join("");

   return string === newString
      ? console.log(`La palabra o cadena "${string}" es un palíndromo, se lee igual en ambos sentidos`)
      : console.info(`La palabra o cadena "${string}" no es un palíndromo`);
};

// Pruebas
console.group("Ejercicio 7");
esPalindromo("Salas");
esPalindromo("Hola Mundo");
console.groupEnd();

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

// const extraerPatron = (string = "", patron = "") => {
//    if (!string) return console.warn("No ingresaste una cadena de texto");
//    if (!isNaN(string)) return console.error("Debes ingresar cadenas de texto");
//    if (!patron) return console.warn("No ingresaste una cadena de texto");
//    if (!isNaN(patron)) return console.error("Debes ingresar cadenas de texto");

//    let count = 0;
//    let newString = string.split(" ");
//    for (let i = 0; i < newString.length; i++) {
//       if (newString[i].includes(patron)) {
//          newString[i] = newString[i].replace(patron, "");
//          count++;
//       }
//    }
//    return (count) ? console.log(`La cadena "${string}" sin el patron "${patron}"" resulta "${newString.join(" ")}" `)
//    : console.log(`No se encontro "${patron}" dentro de la cadena "${string}"`);
// };

const extraerPatron = (string = "", patron = "") =>
   !string
      ? console.warn("No ingresaste una cadena de texto")
      : !patron
      ? console.warn("No ingresaste una cadena de texto")
      : console.log(string.replace(new RegExp(patron, "ig"), ""));

// Pruebas
console.group("Ejercicio 8");
extraerPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
extraerPatron("hola mundo adios mundo", "mundo");
extraerPatron("xyz1, xyz2, xyz3, xyz4 y xyz5");
console.groupEnd();
