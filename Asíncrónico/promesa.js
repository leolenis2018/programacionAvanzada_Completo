//

function conectarNetflix(usuario, clave) {
  let promesa = new Promise(function (resolve, reject) {
    //Bd Netflix
    const USUARIO = "Pedro";
    const CLAVE = "admin123";
    console.log("Pidiendo al servidor...");

    setTimeout(function () {
      if (usuario == USUARIO && clave == CLAVE) {
        resolve("Bienvenido");
      } else {
        reject("Revisa credenciales");
      }
    }, 5000);
  });
  return promesa;
}

conectarNetflix("pedro", "admin123")
  .then(function (respuesta) {
    console.log(respuesta);
  })

  .catch(function (error) {
    console.log(error);
  });
