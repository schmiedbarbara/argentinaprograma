//inicializamos i en 10 y con el iterador i-- le vamos restando 1
//por vuelta que da el bucle 

//la condicion de salida es que i sea mayor o igual a 0
for (let i=10; i>=0; i--){
    if (i==10){
        //si el numero es 10 se imprime en esa misma linea el siguiente mensaje:
        console.log("Cuenta regresiva: %i", i);
} else if (i==0){
    //y si el numero es 0, directamente se imprime en la terminal lo siguiente:
    console.log("Lanzamiento!");
} else {
    //para todos los demás numeros, simplemente los imprimimos en la terminal!
    console.log(i);
}
}