let nombre = "Black Widow";
let directos = "Alfonso";
let sinopsis = "Una mujer queda viuda";
let genero = "Accion";
let duracion = 120;

let cajonera = [
  "Black Widow",
  "Alfonso",
  "Una mujer queda viuda",
  "Accion",
  120,
];
console.log(cajonera[3]);

//OBJETOS
/*LOS OBJETOS EMPIEZAN CON LLAVES
No tiene cajones como los arreglos, yo tengo un atributo y su valor*/

let pelicula = {
  nombre: "Black Widow",
  director: "Alfonso",
  sinopsis: "Una mujer queda viuda",
  genero: "Accion",
  duracion: 120,
  personajes:[
      "Viuda",
      "Estrella"
  ],
  ciudades:{
      ciudad1: "londres",
      ciudad2:"Madrid"
  }
};
console.log(pelicula.ciudades.ciudad2);
