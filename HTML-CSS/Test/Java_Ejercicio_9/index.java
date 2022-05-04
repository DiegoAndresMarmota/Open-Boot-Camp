/*Crea una clase Persona con las siguientes variables:
La edad
El nombre
El teléfono
Una vez creada la clase, crea una nueva clase Cliente que herede de Persona, esta nueva clase tendrá la variable credito solo para esa clase.
Crea ahora un objeto de la clase Cliente que debe tener como propiedades la edad, el telefono, el nombre y el credito, tienes que darles valor y mostrarlas por pantalla.
Una vez hecho esto, haz lo mismo con la clase Trabajador que herede de Persona, y con una variable salario que solo tenga la clase Trabajador.*/

package com.company;
public class Main {
    public static void main(String[] args) {
        Cliente cliente = new Cliente();
        Trabajador trabajador = new Trabajador();
        cliente.nombre = "Tomas";
        cliente.edad = 18;
        cliente.telefono = 1234567890;
        cliente.credito = 277.9;
        System.out.println("Hola" + cliente.nombre + "tengo" + cliente.edad + "años y mi numero es" + cliente.telefono+ ".Mi linea de credito es" + cliente.credito + "pesos chilenos(CLP)");

        trabajador.nombre = "Ariadna";
        trabajador.edad = 33;
        trabajador.telefono = 756565432;
        trabajador.salario = 199.1;
        System.out.println("Hola. Soy" + trabajador.nombre + ",mi edad es" + trabajador.edad + "puedes llamarme al" + trabajador.telefono
                + "y solo cuento con" + trabajador.salario + "pesos en mi cartera");}
            }

class Persona{
    int edad;
    int telefono;
    String nombre;}

class Cliente extends Persona{
    double credito;}

class Trabajador extends Persona {
    double salario;}