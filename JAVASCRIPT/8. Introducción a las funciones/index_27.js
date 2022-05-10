//Qué son las funciones, cómo se declaran y cómo se utilizan

saludar(2, "adios", false)

function saludar(parametro1, parametro2, parametro3) {
    console.log("Hola")
}

///
saludar("Diego")

function saludar(nombre) {
    console.log(`Hola ${nombre}` )
}

///

let nombre_2 = "Juan"
console.log(nombre_2)

despedir(nombre_2)
console.log(nombre_2)

function despedir(nombre) {
    nombre = "Andrés"
    console.log(`Adiós ${nombre}`)
}  

///
let persona = { nombre: "José", apellido: "Torres" }
console.log(persona)

saludarPersona(persona)
console.log(persona)

function saludarPersona(objeto) {
    objeto.apellido = "Villar"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

/////

function imprimirNumeros(numero = 7) {
    console.log(numero)
}
imprimirNumeros()

///

function suma(...parametros) {
    console.log(parametros)
}

imprimir(1, 3, 9, 2, "hola", { id: 9 })

///
function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const s = suma(1, 2, 3, 4, 9, 15, 16)
console.log(s) 

/////

let variable = "hola"

function multiplicar(a = 0, b = 0) {
    console.log(variable)
    let variable_interna = "adios"
    console.log(variable_interna)
    return a * b
} 
console.log(multiplicar(4, 9))