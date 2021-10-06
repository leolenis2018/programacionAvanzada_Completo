let temperaturas = [35, 20, 26, 55, 32];

function calcularPromedioTemperatura(...temperaturas) {
  let temperaturaMaxima = Math.max(...temperaturas);
  let temperaturaMinima = Math.min(...temperaturas);
  let promedio = (temperaturaMaxima+temperaturaMinima)/2;
  return(promedio);
}
console.log(`La temperatura promedio es: ${calcularPromedioTemperatura(...temperaturas)}`);

//TIPO FLECHA
let calcularPromedioTemperatura = (...temperaturas) => {
  let temperaturaMaxima = Math.max(...temperaturas);
  let temperaturaMinima = Math.min(...temperaturas);
  let promedio = (temperaturaMaxima+temperaturaMinima)/2;
  return(promedio);
}
console.log(`La temperatura promedio es: ${calcularPromedioTemperatura(...temperaturas)}`);  