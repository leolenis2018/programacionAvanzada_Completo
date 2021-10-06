//Array, porque tienen varios valores en una variables
//Split se aplica sobre una cadena de texto. Es un metodo de una librería
/*let codigoNave = "ARQ255: Leonardo";
let separacionCadena = codigoNave.split(":");*/

function obtenerNombre(codigoNave) {
  let nombrePiloto = codigoNave.split(":");
  return `El nombre del piloto:${nombrePiloto[1]}`;
}
console.log(obtenerNombre("ARQ255:Sebastian"));

/*let nombre = obtenerNombre("ARQ255:Leonardo");
console.log(nombre);
console.log("El nombre del piloto es:"+separacionCadena[1]);

let obtenerNombre = (nombrePiloto) => (nombrePiloto = codigoNave.split(":"));
nombre = obtenerNombre("ARQ: Mateo");
console.log(nombre);*/

/*let obtenerNombre = codigoNave => {
  let nombrePiloto = codigoNave.split(":");
  return `El nombre del piloto es: ${nombrePiloto[1]}`
  }
  console.log(obtenerNombre("ARQ345:Mateo"));*/