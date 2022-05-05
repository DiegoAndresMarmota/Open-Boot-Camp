/*
En este primer ejercicio tendrás que recorrer los números del 1 al 100 mediante un bucle y que cuando muestre un número par, muestre por pantalla que el número es par, en otro caso tendrá que mostrar que es impar.

Pista: tendréis que hacer un comprobación dentro del bucle.*/

numero = 0

for (let i = 0; i <= 100; i++) {
    if (2 * i - 1) {
        console.log(`Este numero ${i} es par`);
        break;
    } else {
        console.log(`Este numero ${i} es impar`)
        break;
    }
}
