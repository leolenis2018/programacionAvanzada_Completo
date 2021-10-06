function pagarSalario(numeroVentas, costoComision, salarioBase) {
  let valorComision = numeroVentas * costoComision;
  let salarioBruto = salarioBase + valorComision;
  let descuentoImpuestos = salarioBruto * 0.05;
  let salarioNeto = salarioBruto - descuentoImpuestos;

  console.log("El salario Neto es de $:" + salarioNeto);
}

pagarSalario(5, 1500000, 3500000);
