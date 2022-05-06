//Estructuras de control
//Bifurcaciones if...ese

/*
let saldo = 50;
let efectivo = 20;

if (efectivo < saldo) {
    console.log("Puedes sacar dinero")
} else {
    console.log("Saldo insuficiente")
} */

/*
if (true) {
    console.log("Es verdadero")
}
If (false) {
    console.log("Es verdadero")
} else {
    console.log("No es verdadero")
} */

// If else + if else

let nota = 5;

if (nota === 5) {
    console.log("Obtuviste una nota sobresaliente")
} else if (nota === 4) {
    console.log("Buen trabajo, pero podrias hacerlo mejor")
} else if (nota === 3) {
    console.log("Regular trabajo, pero podrias hacerlo mejor")
} else if (nota === 2) {
    console.log("Mal trabajo, pero podrias hacerlo mejor")
} else if (nota === 1) {
    console.log("Muy mal trabajo, pero podrias hacerlo mejor")
} else {
    console.log("Introduce una nota válida")
}

//Operacor switch, en funcion de un valor,colocar varias funciones

let nota1 = 5;

switch (nota1) {
    case 5:
        console.log("Obtuviste una nota sobresaliente");
        break;
    case 4:
        console.log("Obtuviste una nota muy buena");
        break;
    case 3:
        console.log("Obtuviste una nota buena");
        break;
    case 2:
        console.log("Obtuviste una nota regular");
        break;
    case 1:
        console.log("Obtuviste una nota muy mala");
        break;
    default:
        console.log("Error");
        break;
}
