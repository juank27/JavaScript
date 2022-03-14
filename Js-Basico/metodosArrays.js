//Array de objetos, de articulos
var articulos=[
	{ nombre : "Bicicleta", costo : 3000 },
	{ nombre : "TV", costo : 2500},
	{ nombre : "libro", costo : 100},
	{ nombre : "celular", costo : 10000}
];
// .filter()
// crear un nuevo array y los filtra segun la condicion
var articulosFiltrados = articulos.filter(function (articulo) {
	//condicion de filtrado
	return articulo.costo >= 500 && articulo.nombre == "celular";
});
//consultando el filtrado
articulosFiltrados[0] //--> salida {nombre: 'celular', costo: 10000}

// .map()
// retorna un mapeo y solo las caracteristicas del objeto
var nombreArticulos= articulos.map(function(articulo) {
	return articulo.nombre;
});
//consultando el mapeado
nombreArticulos // --> salida  ['Bicicleta', 'TV', 'libro', 'celular']

//.find()
//retorna el objeto segun la busqueda.
var encuentraArticulos = articulos.find(function(articulo) {
	return articulo.nombre === "TV";
});

encuentraArticulos // --> Salida {nombre: 'TV', costo: 2500}

//.ForEach()
//realliza un ciclo del iterable
articulos.forEach(function (articulo) {
	console.log(articulo.nombre);
});
//salida -->Bicicleta TV libro celular

// .some()
// regresa un boolean y solo retorna un True o false
var articulosBaratos = articulos.some(function (articulo) {
	return articulo.costo <= 600;
});
articulosBaratos // --> salida True