
//Listas (Array o arreglo) Conjunto de variables, puestas en orden

const lista = [1, "Hola", true, undefined, null];
const lista2 = new Array(2, "Hola", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "Soy el primer elemento de la lista. index 0";
const lista4 = [lista, lista2, lista3];

console.log(lista)
console.log(lista2)
console.log(lista3)
console.log(lista4)

//Objetos

const movil = {   //atributos
    anchura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Diego", "Martin", "José"],  //Array
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32,
    }             
}
movil.anyo = 2019; //Ingresar nuevos atributos a un objeto
movil.marca = "Samsung" //Modificar un valor dentro de un atributo dentro del objeto
console.log(movil.tarjeta.marca)

//Fechas
//Librerias de apoyo Moment.js
const ahora = new Date();
console.log(ahora)

const fecha_milis = new Date(10);
console.log(fecha_milis)

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena)

const fecha_valores = new Date(2022, 2, 15);
console.log(fecha_valores)

const dia = ahora.getDate()
const mes = ahora.getMonth()
const año = ahora.getFullYear()
console.log(dia, mes, año)

