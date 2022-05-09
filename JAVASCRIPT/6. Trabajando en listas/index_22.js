// .sort() --> Modifica el array
const array = [2, 5, 9, 15, 1, 2, 0, 4]
console.log[array]
array.sort((a, b) => {
    if (a < b) {
        return - 1
    } else if (a > b) {
        return + 1
    } else {
        return 0
    }
})
console.log(Array)

//Ordenar unicamente arrays numericos

const arrayNumericos = [5, 2, 7, 8, 9, 0, 354, 45, 112, 67]
arrayNumericos.sort((a, b) => a - b)  //De menor a mayor
console.log(arrayNumericos)

//Interesante en arrays de objetos

const listaObjetos = [
    { nombre:"Leire", edad: 35},
    { nombre: "Gorka", edad: 34},
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucia", edad: 3 },
    {nombre: "Amaia", edad: 29} 
]

// listaObjetos.sort((a, b) => {
//     if (a.edad > b.edad) {
//         return - 1
//     } else if (a.edad < b.edad) {
//         return + 1
//     } else {
//         return 0
//     }
// })

listaObjetos.sort((a, b) => a.edad - b.edad)
console.log(listaObjetos)

//Como comparar listas
//.every()

// const array2 = [1, 5, 8, 9, 12, 56, 71, 80]
// const resultado = array2.every(valor => {
//     if (typeof valor === "number") {
//         return true
//     } else {
//         return false
//     }
// })
const resultado = array.every(valor => valor > 0)
console.log(resultado)

///Comparacion de listas
const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]

console.log(ar1 === ar2)

const compararArrays = (arrays_1, arrays_2) => {
    if (arrays_1.length !== arrays_2.length) return false
    const res = arrays_1.every((valor, i) => valor === arrays_2[i])
    return res
}

console.log(compararArrays(ar1, ar2))

const arrays_3 = [1, 2, 3, 6, 8]
const ar3 = arrays_3

console.log(compararArrays(ar1, ar3))

