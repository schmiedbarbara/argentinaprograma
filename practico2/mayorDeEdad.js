//comienzo utilizando readlineSync para agregar 
//valores a la variable edad
const readlineSync = require('readline-sync');
let edad = readlineSync.question("Por favor, ingrese su edad:");

//condicional para definir qué mensaje se mostrará según la edad
//que se ingrese
if (edad >= 18){
    console.log("¡Eres mayor de edad!");
} else {
    console.log("¡Eres menor de edad!");
}