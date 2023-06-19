//dado que se pide que, se pueda acceder al atributo /dias/ de cada mes,
//opté por utilizar un objeto (variable constante ya que los valores no cambian)
const meses = {
    1: {nombre: "enero", dias: 31},
    2: {nombre: "febrero", dias: 28},
    3: {nombre: "marzo", dias: 31},
    4: {nombre: "abril", dias: 30},
    5: {nombre: "mayo", dias: 31},
    6: {nombre: "junio", dias: 30},
    7: {nombre: "julio", dias: 31},
    8: {nombre: "agosto", dias: 31},
    9: {nombre: "septiembre", dias: 30},
    10: {nombre: "octubre", dias: 31},
    11: {nombre: "noviembre", dias: 30},
    12: {nombre: "diciembre", dias: 31}
  };
  
  //utilizo el readlineSync para que se ingrese un valor por terminal
  //para que los valores puedan leerse utilicé la función parseInt()
  const readlineSync = require('readline-sync');
  let mes = parseInt(readlineSync.question('Ingrese un numero del 1 al 12: '));
  
  //cantidadDeDias almacena la cantidad de dias que tiene
  //el mes que se encuentra en el numero de posicion especificado  

  let cantidadDeDias = meses[mes].dias;
  //se busca en la posición almacenada en la variable "mes", en su atributo días
  
  //por ultimo, imprimo los resultados por la terminal
  console.log("La cantidad de días del mes de " + JSON.stringify(meses[mes].nombre) + " es: %i", cantidadDeDias);
  