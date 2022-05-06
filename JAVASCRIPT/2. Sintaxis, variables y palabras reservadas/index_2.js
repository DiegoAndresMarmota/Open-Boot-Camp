var variable;
let variableLet;

// const constante;
const constante = "Hola soy una constante"

var a = 1; // afecta a todo el codigo
console.log(a);
var a = 4;
console.log(a);

let b = 3; //afecta al bloque donde fue declarado
console.log(b);

b = 5;
console.log(b);

var variable = "Variable"
for (var i = 0; i < 3; i++) {
    var variable = "Variable dos"
}
console.log(variable)

let variable_Let = "Variable Let"
for (var i = 0; i < 3; i++) {
    let variableLet = "Variable Dos let"
}
console.log(variableLet)

//declara el tipo de variable que es)
console.log(typeof 1)


