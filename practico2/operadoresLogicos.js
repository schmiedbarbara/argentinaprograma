//utilizo el readlineSync para poder ingresar distintos valores
const readlineSync = require('readline-sync');
let entero = readlineSync.question("Ingrese un numero entero:");

//según en cuál condicional entre el numero entero ingresado
//se imprimirá por terminal un resultado distinto
if (entero>0 && entero%2==0){
    console.log("El numero es positivo y par");
} else if (entero>0 && entero%2!==0){
    console.log("El numero es positivo e impar");
} else if (entero<0){
    console.log("El numero es negativo");
} else if (entero==0){
    console.log("El numero es cero");
}
//las opciones son:
//numero positivo && par
//numero positivo && impar
//numero negativo
//numero == cero