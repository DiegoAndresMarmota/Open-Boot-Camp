/*Crea un archivo JS que contenga las siguientes líneas:
- Una variable que contenga tu altura en centímetros (entero)*/

const altura_cms = 176

/*- Una variable que contenga tu altura en metros (número de coma flotante)*/

const altura_mts = 1.76

/*- Una variable que contenga tu peso en kilogramos (número de coma flotante)*/

const peso_kgs = 73.5

/*- Una variable que contenga tu altura en metros redondeada hacia arriba*/

const altura_red = Math.ceil(altura_mts)

/*- Una variable que contenga tu peso en kilogramos redondeado hacia abajo*/

const peso_red = Math.floor(peso_kgs)

/*- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript*/

const sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE