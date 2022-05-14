/* Crea un archivo JS que contenga las siguientes líneas:
- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol" */

const compraSupermercado = ["Bebida", "Fideos", "Mermelada", "Pan", "Jamón"]
compraSupermercado.push("Papel Higienico")
compraSupermercado.pop()

/*- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)*/

const peliculasFavoritas = [
    {
        titulo: "El señor de los anillos: La comunidad del anillo",
        director: "Peter Jackson",
        fecha: new Date(2001, 12, 1)
    },
    {
        titulo: "El señor de los anillos: Las dos torres",
        director: "Peter Jackson",
        fecha: new Date(2002, 12, 1)
    },
    {
        titulo: "El señor de los anillos: El retorno del rey",
        director: "Peter Jackson",
        fecha: new Date(2003, 12, 1)
    }
]

/*- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)*/

const peliculasNuevas = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))

/*- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)*/

const directores = peliculasFavoritas.map(pelicula => {
    return pelicula.director
})

/*- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)*/

const titulos = peliculasFavoritas.map(pelicula => {
    return pelicula.titulo
})

/*- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)*/

const directores_titulos = directores.concat(titulos)

/*- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)*/

const directores_titulos_prop = [...directores, ...titulos]