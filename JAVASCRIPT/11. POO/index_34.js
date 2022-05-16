const persona = {
    nombre: "Diego",
    edad: 36,
    isDeveloper: true,
    saludo: function () {
        console.log("hola")
    }
}

console.log(persona)
persona.saludo()

const otra_persona = {
    nombre: "Miguel",
    edad: 15,
    isDeveloper: false,
    saludo: function () {
        console.log("hello")
    }
}

otra_persona.saludo()

//Función Factory

const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, //nombre: nombre
        edad,
        isDeveloper,
        saludo: function () {
            console.log('Hello')
        }
    }
}

const nueva_persona1 = creaPersona("Juan", 23, true)
console.log(nueva_persona1)

const nueva_persona2 = creaPersona("Maria", 44, false)
console.log(nueva_persona2)

