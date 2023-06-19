//utilizo readlineSync para ingresar un numero de forma interactiva 
const readlineSync = require('readline-sync');
let numero = readlineSync.question("Ingrese un numero:");

//condicional para que, segun cómo sea el numero, se impriman
//diferentes mensajes en la terminal
if (numero>0){
    console.log("¡El número es positivo!");
} else if (numero < 0) {
    console.log("¡El numero es negativo!");
} else {
    console.log("¡El numero es cero!");
}