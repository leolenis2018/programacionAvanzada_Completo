function conectarNetflix(usuario, clave, callback) {
  const USUARIO = "Pedro";
  const CLAVE = "admin123";
  console.log("Pidiendo al servidor...");

  setTimeout(function () {
    if (usuario == USUARIO && clave == CLAVE) {
      callback(200);
    } else {
      callback(400);
    }
  }, 5000);
}

conectarNetflix("Pedro", "admin123", function (estado) {
  if (estado == 200) {
    console.log("Bienvenido");
  } else {
    console.log("Revisa credenciales");
  }
});
