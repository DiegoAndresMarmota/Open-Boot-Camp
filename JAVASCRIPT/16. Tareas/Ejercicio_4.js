/*Crea un archivo JS que contenga las siguientes líneas
- Una cadena de texto con tu Nombre*/

const nombre = "Diego Andres"

/*- Otra cadena de texto con tu Apellido*/

const apellido = "Echalar"

/*- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias */

const estudiante = nombre.concat(" ").concat(apellido)

/*- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas*/

const estudianteMayus = estudiante.toUpperCase()

/*- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúscula*/

const estudianteMinus = estudiante.toLowerCase()

/*- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios*/

const estudianteExtension = estudiante.length

/*- Una variable que contenga la primera letra del Nombre*/

const primeraNombre = nombre.substring(0, 1)

/*- Otra variable que contenga la última letra del Apellido*/

const ultimaApellido = apellido.substring(apellido.length - 1, apellido.length)

/*- Una cadena de texto que elimine los espacios de la variable "estudiante"*/

const estudianteSinEspacios = estudiante.replace(/ /D, "")

/*- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"*/

const nombreEnEstudiante = estudiante.includes(nombre)