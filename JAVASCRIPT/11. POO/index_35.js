//Declarando un objeto de clases Persona
class Persona {
    nombre;    //Esto es una variable
    edad;
    isDeveloper;
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre   // Asi se declara un atributo en una clase. Las variables dentro de una clase/objeto se llaman atributos, y dentro de las funcione, se llaman metodos
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    //Esto es un metodo, y se puede acceder a traves de persona
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, y tengo ${this.edad} de años de edad.`)
    }    
}

// con (new), JS crea un objeto de la clases ?, en este caso, Persona
const nueva_persona = new Persona("Seba", 31, true)    //Como crear un nuevo objeto de tipo persona
console.log(nueva_persona)
nueva_persona.saludo()

let numero = 60 //inicializar variables
let persona_2 = new Persona("Maria", 34, false)  //instanciar para objetos
console.log(typeof persona_2)
console.log(persona_2 instanceof Persona)