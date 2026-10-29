// EJERCICIO 4: CLASIFICACIÓN DE PRODUCTOS

let nombre = prompt("Ingrese el nombre del producto:");
let precioTexto = prompt("Ingrese el precio del producto:");
let categoria = prompt("Ingrese la categoría: tecnología, alimentos o ropa");

let precio = Number(precioTexto);
let impuesto = 0;
let clasificacion = "";

if (
    !nombre || !nombre.trim() ||
    !precioTexto || !precioTexto.trim() ||
    !Number.isFinite(precio) || precio <= 0 ||
    !categoria
) {
    console.log("Datos inválidos");

} else {

    categoria = categoria.trim().toLowerCase();

    if (categoria === "tecnología" || categoria === "tecnologia") {

        impuesto = precio * 0.18;

        if (precio >= 1500) {
            clasificacion = "Lujo";
        } else {
            clasificacion = "Básico";
        }

    } else if (categoria === "alimentos") {

        impuesto = precio * 0.05;

        if (precio >= 100) {
            clasificacion = "Premium";
        } else {
            clasificacion = "Básico";
        }

    } else if (categoria === "ropa") {

        impuesto = precio * 0.10;

        if (precio >= 300) {
            clasificacion = "Lujo";
        } else {
            clasificacion = "Básico";
        }

    } else {
        console.log("Categoría no válida");
    }

    if (clasificacion !== "") {

        let total = precio + impuesto;

        console.log("Producto: " + nombre);
        console.log("Categoría: " + categoria);
        console.log("Clasificación: " + clasificacion);
        console.log("Impuesto: S/ " + impuesto.toFixed(2));
        console.log("Precio total: S/ " + total.toFixed(2));
    }
}