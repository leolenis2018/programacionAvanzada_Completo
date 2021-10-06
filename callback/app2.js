function robarPlano (id, despegarNave){
    if (id>0 && id<=10){
        let mensaje= "Nos robamos el plano "+ id;
        despegarNave(mensaje,true);
    } else {
        let mensaje= "Nos robamos un plano fake";
        despegarNave(mensaje,false);
    }
}
robarPlano(15, function(mensaje,bandera){
    console.log(mensaje)
    if(bandera){
        console.log("Despegando")
    }else {
        console.log("Despegando...")
    }
       
})



/*//En funcion flecha
let robarPlano = (id, despegarNave)=>{
    if (id>0 && id<=10){
        let mensaje= "Nos robamos el plano "+ id;
        despegarNave(mensaje,true);
    } else {
        let mensaje= "Nos robamos un plano fake";
        despegarNave(mensaje,false);
    }
}
robarPlano(15,(mensaje,bandera)=>{
    console.log(mensaje)
    if(bandera){
        console.log("Despegando")
    }else {
        console.log("Quedate ahí...")
    }
    
    
})*/

/*//Operador Ternario
let robarPlano = (id, despegarNave)=>{
    if (id>0 && id<=10){
        let mensaje= "Nos robamos el plano "+ id;
        despegarNave(mensaje,true);
    } else {
        let mensaje= "Nos robamos un plano fake";
        despegarNave(mensaje,false);
    }
}
robarPlano(5,(mensaje,bandera)=>{
    console.log(mensaje)
    /*if(bandera){
        console.log("Despegando")
    }else {
        console.log("Quedate ahí...")
    }
    bandera ? console.log("Despegando"): console.log("Quedate ahí...")
    
    
})*/

//Operador Ternario
let robarPlano = (id, despegarNave)=>{
    if (id>0 && id<=10){
        let mensaje= "Nos robamos el plano "+ id;
        
    } else {
        let mensaje= "Nos robamos un plano fake";
        console.log(mensaje)
        despegarNave(false);
    }
}

/*robarPlano(15, bandera=> ? console.log("despegando"))*/


robarPlano(5,(mensaje,bandera)=>{
    console.log(mensaje)
    if(bandera){
        console.log("Despegando")
    }else {
        console.log("Quedate ahí...")
    }
    bandera ? console.log("Despegando"): console.log("Quedate ahí...")
    
    
})