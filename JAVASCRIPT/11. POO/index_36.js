
class Persona {
    //Private --> #
    //Solo su puede acceder dentro de la clases
    #nombre
    #edad
    #obtenNombre
    #obtenEdad

    //Protected --> _
    //    //Solo su puede acceder dentro de la clase y desde clases descendientes

    _isDeveloper = true
    constructor(nombre, edad) {
        this.#nombre = nombre 
        this.#edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, y tengo ${this.edad} de años de edad.`)
    }    
    obtenNombre() {  //Funcion Getter  --> Nos permite acceder (de forma controlada) a algún atributo protegido
        return this.#nombre
    }
    #obtenEdad() {
        return this.#edad
    }

    getEdad() {
        return this.#edad 
    }
    setEdad(nuevaedad) {
        this.#edad = nuevaedad
        return this.#edad
    }
}

const persona = new Persona("Fredo", 70)
console.log(persona)
console.log(persona.nombre)
persona.saludo()
console.log(persona.obtenNombre())
console.log(persona.#obtenEdad())
console.log(persona._isDeveloper)

/////////////////////////

//Getter --> metodos que nos permiten obtener atributos/metodos privados o protegidos

const edad = persona.getEdad()
console.log(edad)

//Setter --> metodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos
//Quiero cambiar la edad de la persona
persona.setEdad(34)
console.log(persona.getEdad())

