//Comparaciones

let max = 10;
let min = 5;

if (max > min) {
    console.log("max es mayor que min")
}
if (max >= 10) {
    console.log("max es mayor o igual que min")   //>= Es mayor o igual
}
if (min < max) {
    console.log("min es menor que max")
}
if (min <= max) {
    console.log("min es menor o igual que max")
}


//igualdad
if (5 == 5) {
    console.log("5 es igual a 5")
}
if (5 === 5) {
    console.log("5 es muy igual a 5")
}

let a = 5;
let b = 5;
if (a == b) {
    console.log("5 es igual a 5 - Debil") //Chequea el valor
}
if (a === b) {
    console.log("5 es muy igual a 5 - Fuerte") //Chequea el valor y el tipo (String, number, etc)
}

//Desigualdades

let c = 4;
let d = 10;

if (c != d) {
    console.log("c es es diferente a d")
}
if (c !== d) {
    console.log("c es muy diferente a d")
}