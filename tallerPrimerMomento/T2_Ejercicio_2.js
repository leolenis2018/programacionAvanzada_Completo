function robarPlano (id, despegarNave){
    if (id>0 && id<=10){
        let mensaje= "Nos robamos el plano "+ id;
        despegarNave(mensaje,true);
    } else {
        let mensaje= "Nos robamos un plano fake";
        despegarNave(mensaje,false);
    }
}
robarPlano(12, function(mensaje,bandera){
    console.log(mensaje)
    if(bandera){
        console.log("Despegando")
    }else {
        console.log("Despegando...")
    }
       
})
