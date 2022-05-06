//break y continue
//labels

let unidades = 0
let decenas = 0

while (true) {     //BucleDecenas
    while (true) {    //BucleUnidades
        console.log(`El numero actual es: ${decenas}${unidades}`)
        unidades++
        if (unidades === 10) {
            unidades = 0
            break; //BucleUnidades
        }
        if (decenas === 2) {
            break //BucleDecenas
        } 
    }
    decenas++
}
console.log("Hemos terminado")
