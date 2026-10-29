// EJERCICIO 2: VALIDACIÓN DE ACCESO

let usuario = prompt("Ingrese su nombre de usuario:");
let contrasena = prompt("Ingrese su contraseña:");
let rol = prompt("Ingrese su rol:");

if (usuario === "Andrea") {
    if (contrasena === "1234" && rol === "admin") {
        console.log("Bienvenida, Andrea");
        console.log("Acceso permitido");
        console.log("Permisos: crear, editar y eliminar");
    } else {
        console.log("Contraseña o rol incorrecto");
    }

} else if (usuario === "editor") {
    if (contrasena === "5678" && rol === "editor") {
        console.log("Acceso permitido");
        console.log("Permisos: crear y editar");
    } else {
        console.log("Contraseña o rol incorrecto");
    }

} else if (usuario === "visitante") {
    if (contrasena === "0000" && rol === "visitante") {
        console.log("Acceso permitido");
        console.log("Permisos: solo visualizar");
    } else {
        console.log("Contraseña o rol incorrecto");
    }

} else {
    console.log("Usuario no registrado");
}