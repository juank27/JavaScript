// hoisting en variables
//forma normal
var miNombre;
miNombre = "Juan Carlos";

//hoisting
console.log(hola);
var hola = "Saludo";

//hoisting en funciones
hey();

function hey() {
   console.log("Hola" + miNombree);
}
var miNombree = "Juan";