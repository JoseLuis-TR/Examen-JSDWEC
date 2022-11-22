/**
 * @file indexej2.js - Fichero raíz del ejercicio 2
 * @author José Luis Tocino Rojo
 */

const BOTON = document.getElementById("boton");
const MENSAJE_ERROR_1 = document.getElementById("mensaje1");
const MENSAJE_ERROR_2 = document.getElementById("mensaje2");
const RESULTADO = document.getElementById("resultado");

/**
 * Inicio del programa que se encarga de manejar su ejecución
 * @returns {undefined} Realiza el return cuando existe algun error
 */
function programa(){
    // Se vacian los mensajes de error
    MENSAJE_ERROR_1.innerHTML = "";
    MENSAJE_ERROR_2.innerHTML = "";

    //Se reciben los inputs
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;

    // Se convierten a números enteros
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    //Comprobamos que sea un número, si no se corta
    let checknum = checkNumber(num1,num2);
    if(!checknum){
        return;
    }

    //Comprobamos que no sean mayor a 2500 ni menor a 2001
    let checkmaxmin = checkMaxMin(num1,num2);
    if(!checkmaxmin){
        return;
    }

    //Cambiamos de posicion a los números en caso de que el segundo sea menor
    if(num2 < num1){
        let temp = num2;
        num2 = num1;
        num1 = temp;
    }

    // Creamos una variable que contendrá los años bisiestos
    let numBisiestos = ""
    for(let i = num1; i<num2; i++){
        if(isLeapYear(i)){
            numBisiestos += `${i}, `;
        }
    }

    // Se muestran los años bisiestos
    RESULTADO.innerHTML = numBisiestos;
}

/**
 * Comprobamos que lo que hemos recibido son números
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {boolean}
 */
function checkNumber(num1,num2){
    if(isNaN(num1)){
        MENSAJE_ERROR_1.innerHTML = "El número proporcionado no es válido"
        return false;
    } else if (isNaN(num2)){
        MENSAJE_ERROR_2.innerHTML = "El número proporcionado no es válido"
        return false;
    } else {
        return true;
    }
}

/**
 *  Comprobamos que no se pasan de los límites los números recibidos
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {boolean}
 */
function checkMaxMin(num1,num2){
    if(num1<2001 || num1>2500){
        MENSAJE_ERROR_1.innerHTML = "El número proporcionado debe ser mayor que 2001";
        return false;
    } else if(num2>2500 || num2<2001){
        MENSAJE_ERROR_2.innerHTML = "El número proporcionado debe ser menor que 2500";
        return false;
    } else {
        return true;
    }
}

/**
 * COmprobamos que el año recibido es bisiesto o no
 * 
 * @param {number} num 
 * @returns {number}
 */
function isLeapYear(num){
    if(num%4 === 0){
        return num;
    } else if(num%100 === 0 && num%400){
        return num;
    }
}