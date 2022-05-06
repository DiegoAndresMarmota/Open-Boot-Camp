/*
En este segundo ejercicio, tendréis que crear un bucle que haga 10 iteraciones y en cada una indique el número de esta. Las iteraciones 2, 3, 5 y 7 deben imprimir en su lugar "Número primo".
*/
numero = 0
for (let numero; numero <= 11; numero++) {
    if (numero <= 1) {
        console.log(`Este es el ${numero}`)
        continue;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            console.log(`Este es el ${numero}`)
            continue;
        }
    }
    console.log("Este n° es un número primo")
}