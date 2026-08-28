// ejercicio 1 - modificar la estructura para mostrar diferentes mensajes
let edad = -2;
if (edad < 0) {
  console.log("Error edad invalida, por favor, ingrese un numero valido");
} else if (edad == 21) {
  console.log("Bienvemido y felicidades, ha alcanzado la mayoria de edad");
} else if (edad % 2 == 1) {
  console.log("sabias que tu edad es impar");
}
//ejercicio 2 - calcular litros consumidos
//declaro variable para los litros
let ltsconsumidos = 15;
//variable para vehiculo
let vehiculo = "coche";
//funcion totalapagar
function totalapagar(vehiculo, ltsconsumidos) {
  let precioltr = 0;
  switch (vehiculo) {
    case "coche":
      precioltr = 86;
      break;
    case "moto":
      precioltr = 70;
      break;
    case "autobus":
      precioltr = 55;
      break;
  }
  //cuando verifica el vehiculo lo multiplica - declaro antes la variable total
  let total = precioltr * ltsconsumidos;
  if (ltsconsumidos >= 0 && ltsconsumidos <= 25) {
    total += 50;
  } else if (ltsconsumidos > 25) {
    total += 25;
  }
  //en total se guarda el resultado con el recargo
  return total;
}
//se muestra
console.log(totalapagar("coche", 20));

//ejercicio 3 - local de sandwich
//variables para parametros en string
let base = " ";
let pan = " ";
//funcion que contiene string y cada dato boleano
function totalsandwich(
  base,
  pan,
  queso,
  tomate,
  lechuga,
  cebolla,
  mayonesa,
  mostaza,
) {
  // inicia variable total en 0 donde se acumula la eleccion
  let total = 0;
  switch (base) {
    case "pollo":
      total += 150;
      break;
    case "carne":
      total += 200;
      break;
    case "vegetariano":
      total += 100;
      break;
  }
  switch (pan) {
    case "blanco c/oregano y parmesano":
      total += 50;
      break;
    case "negro c/avena":
      total += 60;
      break;
    case "sin gluten":
      total += 75;
      break;
  }
  if (queso === true) {
    total += 20;
  }
  if (tomate === true) {
    total += 15;
  }
  if (lechuga === true) {
    total += 10;
  }
  if (cebolla === true) {
    total += 15;
  }
  if (mayonesa === true) {
    total += 5;
  }
  if (mostaza === true) {
    total += 5;
  }
  //devuelve la suma total
  return total;
}
//lo muestra en consola
console.log(totalsandwich("pollo", "sin gluten", "queso"));

// ejercicio4 descubrir numero secreto
