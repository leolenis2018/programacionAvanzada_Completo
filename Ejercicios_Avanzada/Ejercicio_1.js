//Como buena practica, las funciones deben terminar en "ar-er-ir"....
//Parametro: Es una variables local, son los ingredientes que se le pnen a la "maquina". Solo se inicializan, no se declaran
//Dentro de las llaves, va el proceso de la maquina (Operaciones)
//las funciones siempre están en el ambito global del codigo.

//FUNCION TRADICIONAL
function calcularDistancia(
  coordenadax1,
  coordenadax2,
  coordenaday1,
  coordenaday2
) {
  console.log(
    `La distancia del planeta Yavin4 a Naboo es de: ${Math.sqrt(
      Math.pow(coordenadax2 - coordenadax1, 2) +
        Math.pow(coordenaday2 - coordenaday1, 2)
    )} UA`
  );
}


//calcularDistancia(0,50,0,-80);

// FUNCION TIPO FLECHA

let calcularDistancia=(
    coordenadax1,
    coordenadax2,
    coordenaday1,
    coordenaday2
  ) => {
    console.log(
      `La distancia del planeta Yavin4 a Naboo es de: ${Math.sqrt(
        Math.pow(coordenadax2 - coordenadax1, 2) +
          Math.pow(coordenaday2 - coordenaday1, 2)
      )} UA`
    );
  }

  calcularDistancia(0, 25, 0, -100);
  calcularDistancia(0,85,0,-80);