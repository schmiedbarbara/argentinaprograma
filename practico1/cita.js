//obtenemos como dato principal dos variables con dos cadenas 
let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

//y procedemos a recuperar la longitud de la cita almacenandola en otra variable
let tamañoDeCita = cita.length;
console.log("El tamaño de la cita es: %s", tamañoDeCita);
//imprimiendo el resultado 

//almacene en una nueva variable el indice de la cadena contenida por la variable substring
let indice = cita.indexOf(substring);
console.log("El indice del substring es: %i", indice);
//e imprimi el resultado 

//por ultimo recorte la cita original y la guarde en la variable citaRevisada
let citaRevisada = cita.replace("en un trigal","");
console.log(citaRevisada);
//y se imprime el resultado en la terminal para verificar que haya sido correctamente modificada
