/*Crea un archivo llamado objetos.js que contenga las siguientes líneas:

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador) */

const datosPersonales = {
    nombre: "Diego",
    apellido: "Echalar",
    edad: 36,
    altura: 176,
    eresDesarrollador: true
}

/*- Una variable que obtenga tu edad a partir del objeto anterior */

const edad = datosPersonales.edad

/*- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s */

const listaAmigos = [
    {
        ...datosPersonales
    },{
        nombre: "Mateo",
        apellido: "Apablaza",
        edad: 30,
        altura: 169,
        eresDesarrollador: false
    },{
        nombre: "Clara",
        apellido: "Pachec",
        edad: 27,
        altura: 175,
        eresDesarrollador: false
    }
]

/*- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor. */

const listaNuevaOrdenada = listaAmigos.sort((a, b) => b.edad - a.edad)
console.log(listaNuevaOrdenada)