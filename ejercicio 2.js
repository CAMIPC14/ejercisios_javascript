// EJERCICIO 3: AÑO BISIESTO Y EDAD LEGAL

let nacimiento = Number(prompt("Ingrese su año de nacimiento:"));

let anioActual = new Date().getFullYear();

if (Number.isInteger(nacimiento) &&
    nacimiento > 0 &&
    nacimiento <= anioActual) {

    // Verificar si el año es bisiesto
    if ((nacimiento % 4 === 0 && nacimiento % 100 !== 0) ||
        nacimiento % 400 === 0) {

        console.log("El año de nacimiento es bisiesto");

    } else {
        console.log("El año de nacimiento no es bisiesto");
    }

    // Calcular la edad aproximada
    let edad = anioActual - nacimiento;

    console.log("Edad aproximada: " + edad);

    // Verificar mayoría de edad
    if (edad > 18) {
        console.log("Es mayor de edad");
    } else if (edad < 18) {
        console.log("Es menor de edad");
    } else {
        console.log("Puede tener 17 o 18 años, según su cumpleaños");
    }

} else {
    console.log("Año de nacimiento inválido");
}