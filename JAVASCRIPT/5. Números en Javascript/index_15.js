//Principales operaciones aritmeticas

let a = 3.5;
let b = 4.8;

//Suma (+)
console.log(a + b)
//Resta (-)
console.log(a - b)
//Multiplicacion (*)
console.log(a * b)
//División (/)
console.log(a /b)

//Representacion de los numeros en cadenas de texto

console.log(typeof a);
let a_s = a.toString();
console.log(a_s);
console.log(typeof a_s)

//Redondeo de numeros decimales
let c = 3.3;
let d = c * 3;
console.log(typeof d);

//.toFixed(x) - Limitar decimales en ()
console.log(d.toFixed(4));
console.log(typeof d.toFixed(4));
//.toPrecision(x) - Limita el numerp de cifras significativas
let e = 1839.12314231
console.log(e.toPrecision(4))