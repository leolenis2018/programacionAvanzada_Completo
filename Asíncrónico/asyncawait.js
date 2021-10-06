// Trycatch: es lo que se conoce como manejo de excepciones

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
  async function procesar (){
      try {
          let resultadoPromesa= await conectarNetflix("pedro", "admin123")
          
      } catch (error) {
          console.log(error)
          
      }
  }
  procesar();

  