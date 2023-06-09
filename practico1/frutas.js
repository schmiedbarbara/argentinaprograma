//primero, se crea un arreglo vacio
frutas = [];
frutas.push("pera","higo", "ciruela", "cereza","palta");
//luego agregue 5 frutas al arreglo utilizando la funcion push()

//obtenemos la ultima fruta del arreglo, agregandola en una nueva variable
let ultima = frutas[frutas.length - 1];
console.log("La ultima fruta agregada fue: %s",ultima);
//e imprimimos el resultado por consola

//por ultimo, busque la fruta en la primera posicion y la almacene en una nueva variable
let primera = frutas[0];
console.log("La primera fruta agregada fue: %s",primera);
//y se imprime por pantalla el resultado