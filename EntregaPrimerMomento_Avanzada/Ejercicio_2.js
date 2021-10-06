
function obtenerNombre(codigoNave) {
    let nombrePiloto = codigoNave.split(":");
    return `El nombre del piloto:${nombrePiloto[1]}`;
  }
  console.log(obtenerNombre("ARQ255:Sebastian"));


  //TIPO FLECHA
  let obtenerNombre = codigoNave => {
  let nombrePiloto = codigoNave.split(":");
  return `El nombre del piloto es: ${nombrePiloto[1]}`
  }
  console.log(obtenerNombre("ARQ345:Mateo"));