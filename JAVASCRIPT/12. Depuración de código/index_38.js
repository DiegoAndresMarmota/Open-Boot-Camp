const persona = {
    nombre: "Diego",
    edad: 36
}
function obtenDobleEdad(edad) {
    return 2 * edad
}
const DobleEdad = obtenDobleEdad(persona.edad)
console.log(DobleEdad)

function obtenArray(edad) {
    let arrayNums = []
    for (let i = 0; i < 10; i++) {
        const numero = edad + i
        console.log(numero)
        arrayNums = [...arrayNums, numero]
    }
    return arrayNums
}

const array = obtenArray(persona.edad)
console.log(array)
