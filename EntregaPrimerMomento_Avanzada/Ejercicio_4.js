let cargaEnergia = [23, 56, -21, 98, 75, -120, -60, -20, -58, 63, 10, 25, 12, 14];

function contarSables (cargaEnergia) {
  let contador = 0;

  for (let i = 0; i < cargaEnergia.length; i++) {
    if (cargaEnergia[i] < 0) {
      contador++;
    }
  }
  console.log(contador);
}
contarSables(cargaEnergia);

//Funcion Flecha

let cargaEnergia = [23,-21,75, -120, -60, -20, -58];

let contarSables = cargaEnergia => {
  let contador = 0;

  for (let i = 0; i < cargaEnergia.length; i++) {
    if (cargaEnergia[i] < 0) {
      contador++;
    }
  }
  console.log(contador);
}
contarSables(cargaEnergia);


