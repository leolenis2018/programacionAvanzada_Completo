//Convertir Funcion tradiconal a funciontipo flecha
//1. Cambio function por let.

//2. como ya tengo let(variable) depor poner el simbolo =()
//3. Despues del =, van los parametros
//4. Se pone el operador flechas despues de los parametros de la funcion
//5. SI EL CUERPO DE LA FUNCION SE ESCRIBE EN UNA SOLA LINEA,
//PUEDO ELIMANAR LAS LLAVES Y LA PALABRA RETURN

/*6. Si mi funcion solo tiene un parametro, puedo eliminar los parentesis
de ese parametro.*/

let saludar =nombre=> "Hola, como estás " + nombre;
console.log(saludar("Mateo"));

