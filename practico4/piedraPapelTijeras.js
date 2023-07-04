//definimos un arreglo para relacionar los numeros aleatorios con los posibles resultados
const jugada = ["piedra","papel","tijera"];

//funcion que genera un numero aleatorio entre 0 y 2
function obtenerJugadaComputadora(){
    let random = Math.floor(Math.random()*3);
    return jugada[random];
}

//funcion para obtener la jugada del usuario
function obtenerJugadaUsuario(){
    const readlineSync = require("readline-sync");
    let jugada_user = parseInt(readlineSync.question("Ingrese piedra, papel o tijera => "));
    return jugada[jugada_user];
}

//funcion que determina las condiciones para ganar el juego
function determinarGanador(user,pc){
  if (user===pc){
    return "Empate!";
  } 
  //rama afirmativa
  if (user == "papel" && pc == jugada[0]){
    return "Gana el usuario!";
  } else if (user == "tijera" && pc == jugada[1]){
    return "Gana el usuario!";
  } else if (user == "piedra" && pc == jugada[2]){
    return "Gana el usuario!";
  }

  //rama negativa
  if (user == "piedra" && pc == jugada[1]){
    return "Gana la computadora!";
  } else if (user == "papel" && pc == jugada[2]){
    return "Gana la computadora!";
  } else if (user == "tijera" && pc == jugada[0]){
    return "Gana la computadora!";
  }
}

//resultado final
let pc = obtenerJugadaComputadora();
let user = obtenerJugadaUsuario();
let ganador = determinarGanador(user,pc)
console.log("La computadora eligió: " + pc);
console.log("El usuario eligió: " + user);
console.log("El resultado final es: " + ganador);