const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    throw new Error("El valor debe ser de tipo número")
}

//const elDoble = miFuncion("ala")
const numero = "8";

try {
    //codigo que puede fallar
    console.log("Esta ejecutándose de manera correcta")
    const doble = miFuncion(numero)
    console.log(doble)
} catch (e) {
    //En caso de fallar, quiero que ejecutes
    console.log(`El valor de E es ${e}`)
    console.log("Error!")
} finally {
    console.log("Esto se va a ejecutar tanto si ocurre un error, como si no existe ninguno")
}

//InternalError, SyntaxError, TypeError, RangeError y ReferenceError
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error
