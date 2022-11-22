/**
 * @file indexej1.js - Fichero raíz del ejercicio 1
 * @author José Luis Tocino Rojo
 */

/**
 * Recibimos el elemento html con id Nombre
 * @type {HTMLElement}
 */
 const NOMBRE = document.getElementById("Nombre");

 /**
 * Recibimos el elemento html con id Puntuacion
 * @type {HTMLElement}
 */
 const PUNTUACION = document.getElementById("Puntuacion");

 /**
 * Recibimos el elemento html con id Nivel
 * @type {HTMLElement}
 */
 const NIVEL = document.getElementById("Nivel");

 /**
 * Recibimos el elemento html con id Mensajes
 * @type {HTMLElement}
 */
 const MENSAJES = document.getElementById("Mensajes");

 /**
  *  Clase que representa a un jugador
  */
class Jugador {

    /**
     * Crea a un jugador con nombre y apellido además de iniciarle la puntuación
     * @param {string} _nombre 
     * @param {string} _apellidos 
     */
    constructor(_nombre,_apellidos){
        this.nombre = _nombre;
        this.apellidos = _apellidos;
        this.puntuacion = 1;
        this.nivel = 1;
    }

    /**
     * Suma la puntuación, si consigue llegar a 10 puntos se resetea la puntuacion
     * y se gana un nivel
     */
    masPuntuacion(){
        this.puntuacion++;
        
        if(this.puntuacion === 10){
            this.nivel++;
            this.puntuacion = 1;
            MENSAJES.innerHTML += "Has ganado un nivel ";
        }

        MENSAJES.innerHTML += "Ha subido tu puntuación ";
    }

    /**
     *  REsta la puntuación, si llega a 0 se resetea la puntuación y se pierde
     *  un nivel o la partida si nos quedamos sin niveles
     */    
    menosPuntuacion(){
        this.puntuacion--;

        if(this.puntuacion === 0){
            this.nivel--;
            this.puntuacion = 10;
            MENSAJES.innerHTML += "Has bajado un nivel \n Nivel actual: "+this.nivel;
        } if(this.nivel < 0){
            this.eliminacion();
        }

        MENSAJES.innerHTML += "Ha bajado tu puntuación "
    }

    /**
     * Se resetea la puntuación y el nivel y se indica que se ha perdido
     */
    eliminacion(){
        this.puntuacion = 1;
        this.nivel = 1;

        MENSAJES.innerHTML += "Has perdido la partida "
    }
}

/**
 * Creación del jugador 1
 * @type {Jugador}
 */
const JUGADOR_1 = new Jugador("Juan","Rodriguez");

/**
 * Creación del jugador 2
 * @type {Jugador}
 */
const JUGADOR_2 = new Jugador("Paula","Garcia");

/**
 * Array de jugadores
 * @type {Array<Jugador>}
 */
const ARRAY_JUG = [JUGADOR_1,JUGADOR_2];

/**
 * FUnción que maneja el programa y es llamado desde el documento HTML.
 */
function programa(){
    NOMBRE.innerHTML = "Nombre: "+ ARRAY_JUG[0].nombre + ARRAY_JUG[0].apellidos;
    PUNTUACION.innerHTML = "Puntuacion: "+ ARRAY_JUG[0].puntuacion;
    NIVEL.innerHTML = "Nivel: "+ ARRAY_JUG[0].nivel;

    for(i=1;i<22;i++){
        ARRAY_JUG[0].menosPuntuacion();
    }

    for(i=1;i<10;i++){
        ARRAY_JUG[0].masPuntuacion();
    }
}