//tenemos como dato principal un arreglo con invitados
let listaInvitados = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro","Emilia"];

//se crean dos arreglos vacios para separar invitados admitidos de los rechazados
let rechazados = [];
let admitidos = [];

//con este bucle chequeamos cada elemento de la lista de invitados
//y preguntamos si el elemento es igual a los nombres de los invitados rechazados
//esto genera que se agreguen los invitados a su arreglo correspondiente
for (let i=0; i < listaInvitados.length;i++){
    if (listaInvitados[i] == "Jose" || listaInvitados[i] == "Sofia"){
        rechazados.push(listaInvitados[i]);
    } else {
        admitidos.push(listaInvitados[i]);
    }
}
//para imprimir el mensaje inicial es necesario ponerlo fuera del bucle
//para no ocasionar que se imprima con cada invitado del arreglo
console.log("La lista de invitados admitidos es:");
for (let i=0; i < admitidos.length; i++){
    console.log(admitidos[i]);
}
console.log("La lista de invitados rechazados es:");
for (let i=0; i < rechazados.length; i++){
    console.log(rechazados[i]);
}