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