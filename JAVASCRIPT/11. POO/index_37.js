//Inheritance - Herencia
class Persona {
    _nombre
    _edad
    constructor(nombre, edad) {
        this._nombre = nombre 
        this._edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this._nombre}, y tengo ${this._edad} de años de edad.`)
    
    }
}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad)   //Se utiliza el conStructor de la clases padre
        this.lenguaje = lenguaje
    }
    saludo() { //Override
        super.saludo()
        console.log(`y soy desarrollador de ${this.lenguaje}`)
    }
}

const nuevodev = new Desarrollador("Diego", 36, "Javascript")
console.log(nuevodev)
nuevodev.saludo()

//Polimorfismo