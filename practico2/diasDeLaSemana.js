//utilicé el readlineSync para poder ingresar distintos valores,
//y la función parseInt() ya que, al utilizar casos (switch case)
//es necesario que los numeros ingresados se pasen de string a enteros
const readlineSync = require('readline-sync');
const numero = parseInt(readlineSync.question('Ingrese un numero del 1 al 7: '));

//variable definida para imprimir el caso correcto 
let dia;

//utilizamos la variable numero y se definen 7 casos, dependiendo del numero ingresado
//el switch responderá a un caso y se imprimirá el mensaje por consola!
switch (numero){
    case 1:
        dia="Hoy es lunes!";
        break
    case 2:
        dia="Hoy es martes!";
        break
    case 3:
        dia="Hoy es miercoles!";
        break
    case 4:
        dia="Hoy es jueves!";
        break
    case 5:
        dia="Hoy es viernes!";
        break
    case 6:
        dia="Hoy es sabado!";
        break
    case 7:
        dia="Hoy es domingo!";
        break
//se define el default en caso de que ninguno de los casos presentados sea el correcto
default:
    dia="Numero invalido!";
}
console.log(dia);
//en este console.log basta con poner la variable "dia" ya que en ella se encuentra
//definido el mensaje correspondiente

