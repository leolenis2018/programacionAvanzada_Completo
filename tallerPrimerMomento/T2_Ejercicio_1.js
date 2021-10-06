function asignarPadawan(nombre, planeta, edad, estatura, clasificarPadawan) {
  let padawan = {
    nombre: nombre,
    planeta: planeta,
    edad: edad,
    estatura: estatura,
  };
  clasificarPadawan(padawan.edad);
}
asignarPadawan("Mateo", "Yavin_4", 5, 1.75, function (edad) {
  if (edad < 15) {
    let mensaje = "Asignar a manejo de la fuerza";
    console.log(mensaje);
  } else {
    let mensaje = " Asignar a manejo del sable de luz";
    console.log(mensaje);
  }
});
