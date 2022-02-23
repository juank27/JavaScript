var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
console.log(frutas);
//longitud
console.log(frutas.length);

//acceder a un elemento
console.log(frutas[0]);

// agregar un elemnto al final
frutas.push("Uvas");

// elimina el ultimo elemento
frutas.pop();

//agrega elementos al inicio
frutas.unshift("Uvas");

//elimina el primer elemento
frutas.shift();

//retornar la posicion de un elemento
//retorna -1 si no esta
frutas.indexOf("Fresa");
