//Bucles While
//Solo se va a cumplir(ejecutar) siempre y cuando la condiion se cumpla
// while (condicion) {
// }

let i = 0;
let max = 10;

while (i < max) {
    console.log(i);
    i++;
}

//Do.... While La primera vez, siempre se va a ejecutar

i = 15
do {
    console.log("Estoy en el do while")
} while (i < max)

//Casos muy especiales - break, continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
    
    if (lista[i] === 3) {
        continue;
    }
    console.log(lista[i]);
    if (lista[i] > 5) {
        break;
    }
}

//Ambito de un bucle, se refiere a la alcance que tiene las variables declaradas en el bucle

