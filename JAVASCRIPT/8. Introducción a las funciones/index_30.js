//Funciones asincronas

function miAsinc() {
    //Hace una llamada a una base de datos externa
    //Puede darnos algun error
}

const miPromesa = new Promise((resolve, reject) => {
    const i = math.floor(Math.random() * 2)
    //Si está todo correcto
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))
