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

let function totalapagar = (vehiculo, ltsconsumidos) {
    let precioltr = 0;
    switch (vehiculo) {
        case "coche": precioltr = 86;
            break;
        case "moto": precioltr = 70;
            break;
        case "autobus": precioltr = 55;
            break;
    }
}