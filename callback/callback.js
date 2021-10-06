console.log("Iniciando...");

function ejecutarPrograma(calcular) {
  setTimeout(function(){
    console.log("procesando...");
    calcular();
  }, 5000);
}

ejecutarPrograma(function(){
    console.log("terminando...");
});

//Callback: Es una funcion secundariA QUE ES ARGUEMNTO O PARAMETRO DE UNA FUNCION PRINCIPAL, QUE SE EJECUTA SI SE COOMPLETO EL PROCESO DE LA FUNCION PRINCIPAL.
//JS ES ASINCRONICO, GENERA VARIOS PROCESOS AL MISMO TIEMPO