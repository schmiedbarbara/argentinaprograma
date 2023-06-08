//cree 4 variables con valores numericos distintos
let a = 12;
let b = 10;
let c = 2;
let d = 4;
//sume las dos primeras variables y guarde el resultado en otra variable 
let sumaVariables = a + b;

//reste la cuarta variable de la tercera
let restaVariables = d - c;

//los valores obtenidos de suma y resta los multiplicamos y guardamos en resultadoFinal
let resultadoFinal = sumaVariables * restaVariables;

//sacamos si el resultadoFinal es par y nos devuelve un booleano
let esPar = resultadoFinal%2==0;

//por ultimo, imprimimos en pantalla el siguiente mensaje
console.log("Mis variables iniciales fueron: %i, %i, %i y %i. La respuesta a verificar si el resultado final es par es: %s", a, b, c, d, esPar);