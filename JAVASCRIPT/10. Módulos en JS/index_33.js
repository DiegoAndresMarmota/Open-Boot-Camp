function suma(a, b) {
    return a + b
}

function multiplica(a, b) {
    return a * b
}

function eleva(a, b) {
    return a ** b
}

function factorial(a) {
    let factorial = 1;
    for (let i = 2; i <= a; i++) {
        factorial *= i;
    }
    return factorial;
}

const fact = factorial(5)
console.log(fact)


//console.log(module)

    //Formas de importar/exportar modulos
    //1. CommonJS - require
    //2. Import ES6 - import


/* module.exports = {
    suma,
    multiplica,
    eleva,
    factorial
}
*/

/*

const moduloMatematicas = require("./modulos/matematicas.js")
console.log(moduloMatematicas.multiplica)

function moduloMatematicas.eleva(a, b) {
    return a ** b
}

function moduloMatematicas.factorial(a) {
    let factorial = 1;
    for (let i = 2; i <= a; i++) {
        factorial *= i;
    }
    return factorial;
}


const { factorial, suma } = require("./modulos/matematicas.js")

*/

/*  FORMA NUEVA

export function eleva(a, b) {
    return a ** b

///

import {suma, eleva} from './modulos/matematicas.js'
//import * as moduloMatematicas from './modulos/matematicas.js'

const sum = suma(4, 12)
console.log(sum)

const potencia = eleva(2, 21)
console.log(potencia)

*/

/*

const getAutor = () => {
    return "Miguel de Cervantes"
}

export default getAutor
///
import getAutor from './modulos/matematicas.js'

*/