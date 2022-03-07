var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]

function saludarEstudiantes(estudiante) {
   console.log(`Hola, ${estudiante}`);
}
//ciclo for, igualito a java jeje
for (var i = 0; i < estudiantes.length; i++) {
   saludarEstudiantes(estudiantes[i])
}
console.log(i);
//for of
for (var i of estudiantes) {
   saludarEstudiantes(i);
}

//while
while (estudiantes.length > 0) {
   var estudiante = estudiantes.shift();
   saludarEstudiantes(estudiante);
}
// do whiles
do {
   var estudiante = estudiantes.shift();
   saludarEstudiante(estudiante);
} while (estudiantes.length > 0);