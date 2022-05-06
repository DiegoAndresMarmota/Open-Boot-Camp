let input = "EscoRpiO"
let db = "escorpio"
console.log(input === db)

//toLowerCase() - toUpperCase()
console.log(input.toLowerCase() === db.toLowerCase())
console.log(input.toUpperCase() === db.toUpperCase())

//Formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera cadena."
let str_2 = ",y yo soy la segunda cadena."

console.log(str_1.concat(" ", str_2))
console.log(str_1 + " " + str_2)
console.log(`${str_1} ${str_2}`)

///Eliminar espacios al inicio y al final
let str_3 = "    Hola soy un string.      "
console.log(str_3)
//trim()
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

//Obtener el caracter que hay en cierta posicion
let str_4 = "Hola soy el string en cierta posicion"
console.log(str_4.charAt(5))
console.log(str_4[5])

//Obtener la posición de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy una cadena de caracteres aburridos. Cadena más larga"
console.log(str_5.indexOf("cadena"))
console.log(str_5.charAt(15))
console.log(str_5.lastIndexOf("cadena"))