//EJERCICIO 1

const respuesta = prompt("¿Eres bellisimo/a?").toLowerCase();

if (respuesta === "si") {
    console.log ("Ciertamente"); 
}
else if (respuesta === "no") {
    console.log ("No te creo");
}
else {
    console.log ("Respuesta no válida");
}

//EJERCICIO 2 ---------------------------------------------------------------->

const numero = prompt("Ingrese un número, porfis");

if (numero % 2 === 0) {
    console.log (`${numero} es divisible entre 2`);
}
else {
    console.log (`${numero} no es divisible entre 2`)
}

//EJERCICIO 3 ----------------------------------------------------------------->

const num = prompt("Ingresa otro número");

if (num % 2 === 0) {
    alert ("ES PAR")
}
else {
    alert ("ES IMPAR")
}

//EJERCICIO 4 ----------------------------------------------------------------->

const numGanador = prompt("Ingresa un número para ver si ganas un premio")

if (numGanador === 1000) {
    console.log ("Ganaste un premio!");
}
else {
    console.log ("Lo sentimos, sigue participando");
}

//EJERCICIO 5 ----------------------------------------------------------------->

function compareTwo(){
    const numero1 = parseInt(prompt("Comparemos dos números. Ingrese el primer número:"));
    const numero2 = parseInt(prompt("Ingrese el segundo número:"));

    if (numero1 < numero2) {
        return `El número ${numero1} es menor que ${numero2}`
    } else {
        return `El número ${numero2} es menor que ${numero1}`
    }
}

const dosNum = compareTwo()
console.log (dosNum);


//EJERCICIO 6 ----------------------------------------------------------------->

function compareThree() {
    const numero1 = parseInt(prompt("Ahora comparemos tres números. Ingrese el primer número:"));
    const numero2 = parseInt(prompt("Ingrese el segundo número:"));
    const numero3 = parseInt(prompt("Ingrese el tercer número:"));

    if (numero1 === numero2 && numero2 === numero3) {
        return "Los tres números son iguales."
    } else if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3) {
        return "Al menos dos números son iguales."
    } else {
        const mayorNumero = Math.max(numero1, numero2, numero3);
        return `El número mayor es: ${mayorNumero}`
    }
}

const tresNum = compareThree()
console.log (tresNum);

//EJERCICIO 7 ----------------------------------------------------------------->

function verificarDiaSemana() {
    const dia = prompt("Ingrese un día de la semana:").toLowerCase();

    if (dia === "lunes") {
        console.log("Igual que Garfield, odio los Lunes.");
    } else if (dia === "viernes") {
        console.log("Es viernes y el cuerpo lo sabe.");
    } else if (dia === "sábado" || dia === "domingo") {
        console.log("Es fin de semana, a mimir.");
    } else {
        console.log("No sé qué decirte, no es un día interesante.");
    }
}

const solSolecito = verificarDiaSemana()
console.log (solSolecito);

//EJERCICIP 8 ----------------------------------------------------------------->

const calificacion = prompt("Ingrese una calificación entre 1 y 10:");

if (calificacion >= 1 && calificacion <= 10) {
    if (calificacion < 6) {
        console.log("Reprobado");
    } else if (calificacion >= 6 && calificacion <= 8) {
        console.log("Regular");
    } else if (calificacion === "9") {
        console.log("Bien");
    } else {
        console.log("Excelente");
    }
} else {
    console.log("La calificación ingresada está fuera del rango permitido.");
}

//EJERCICIO 9 ----------------------------------------------------------------->

function toppingHelado() {
    const toppingElegido = prompt("Elige un topping: oreo, KitKat o brownie").toLowerCase();
    let precioTotal = 50;

    if (toppingElegido === "oreo") {
        precioTotal += 10;
        console.log(`El helado con topping de Oreo cuesta ${precioTotal} MXN`);
    } else if (toppingElegido === "kitkat") {
        precioTotal += 15;
        console.log(`El helado con topping de KitKat cuesta ${precioTotal} MXN`);
    } else if (toppingElegido === "brownie") {
        precioTotal += 20;
        console.log(`El helado con topping de Brownie cuesta ${precioTotal} MXN`);
    } else {
        console.log("Lo sentimos, no tenemos este topping.");
        console.log(`El helado sin topping cuesta ${precioTotal} MXN`);
    }
}

//EJERCICIO 10 ----------------------------------------------------------------->

const precioCurso = 4999;
const precioCarrera = 3999;
const precioMaster = 2999;

const duracionCurso = 2;
const duracionCarrera = 6;
const duracionMaster = 12;

let optSelected = prompt("Selecciona la opción de tu preferencia: Curso, Carrera o Master").toLowerCase();

let price;
let duration;

if (optSelected === "course") {
  price = precioCurso;
  duration = duracionCurso;
} else if (optSelected === "carrera") {
  price = precioCarrera;
  duration = duracionCarrera;
} else if (optSelected === "master") {
  price = precioMaster;
  duration = duracionMaster;
} else {
  console.log("Opción no válida");
}

if (price) {
  let beca = prompt("¿Cuentas con alguna de estas becas?: Facebook, Google o Jesua ").toLowerCase();

  let discount;

  if (beca === "facebook") {
    discount = 0.2;
  } else if (beca === "google") {
    discount = 0.15;
  } else if (beca === "jesua") {
    discount = 0.5;
  } else {
    discount = 0;
  }

  let discountedPrice = price - price * discount;
  let totalCost = discountedPrice * duration;

  console.log(`El precio mensual con descuento es de ${discountedPrice} MXN. El gasto total por ${duration} meses es de ${totalCost} MXN.`);
}

//EJERCICIO 11 ----------------------------------------------------------------->

function calcularCostoVehiculo() {
    let tipoVehiculo = prompt("Ingresa el tipo de vehículo:").toLowerCase;
    let kmsRecorridos = parseInt(prompt("Ingresa distancia recorrida:"));
    let litrosConsumidos = parseInt(prompt("Igrese litros de gasolina consumidos:"));

    let precioKm;
  
    if (tipoVehiculo === "coche") {
      precioKm = 0.20;
    } else if (tipoVehiculo === "moto") {
      precioKm = 0.10;
    } else if (tipoVehiculo === "autobus") {
      precioKm = 0.50;
    } else {
      return "Tipo de vehículo no válido";
    }
  
    let totalSinExtras = precioKm * kmsRecorridos;
  
    let costoExtra;
    if (litrosConsumidos >= 0 && litrosConsumidos <= 100) {
      costoExtra = 5;
    } else {
      costoExtra = 10;
    }
  
    let totalPagar = totalSinExtras + costoExtra;
    return totalPagar;
  }
  
  let resultado = calcularCostoVehiculo();
  console.log(`Total a pagar: ${resultado}`);
  