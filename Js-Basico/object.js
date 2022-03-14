//creando un objeto
var miAuto = {
	marca : "toyota",
	modelo : "corola",
	annio : 2018,
	detalleDelAuto : function() {
		console.log(`Auto ${this.modelo} ${this.annio}`);
	}
};
//accediendo a una posicion del objeto
miAuto.annio
//accediendo a la funcion
miAuto.detalleDelAuto();

// funcion constructora, crear un template
function auto(marca, modelo, annio) {
	this.marca = marca;
	this.modelo = modelo;
	this.annio = annio;
}
// creando un nuevo objeto, se pueden generar los datos que se deseen
var autoNuevo = new auto("Tesla","Model 3", 2020);
// se accede de igual forma que el anterior
autoNuevo.modelo