//Estructuras de control
//Bucles

//For
for (inicializacion; condicion; actualizacion) {
    //Esto es el bucle
}

for (let i = 0; i < 10; i = i + 1) {
    console.log(i)
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];
for (let i = 0; i < lista.length; i++){
    console.log(lista[i] *2)
}

//Estructura For... Of

for (valor of lista) {
    console.log(valor)
}

//Estructura ForEach o funcion flecha

lista.forEach(valor => {
    console.log(valor)
})

//Estructura For...in

let persona = {
    nombre: "Diego",
    apellido: "Escobar",
    edad: 34,
    isDeveloper: true
}
for (let propiedad in persona) {
    console.log(propiedad)
    console.log(persona[propiedad])  //Acceder al valor de un propiedad en la funcion For in
}

