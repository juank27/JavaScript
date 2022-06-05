// /estructura de informacion de archivos JSON
// /-marca -modelo
var auto ={
	establecimiento : "AutoMercado",
	direccion : "cll 3 No. 2-53 Ubaté Cundinamarca",
	telefono : "31032664578",
	automovil_ : "",
	automovil: function (template) {
		this.automovil_ = template;
	}
};
///creacion de modelo de vehiculos
var mazda = ["camioneta 4x4", "sedan", "cuope"];
var ford = ["camioneta 4x2", "volqueta", "sedan"];
var nissan = ["sedan", "cuope", "camioneta 4x4", "camioneta 4x2"];
var chevrolet = ["sedan", "cuope"];
var unido = [];

/// template auto-modelo
function auto_template(marca, modelo) {
	this.marca = marca;
	this.modelo = modelo;
}

///recorrer modelos de los vehiculos
function leer(vehiculo) {
	vehiculo.forEach(function (vehiculo) {
		console.log(vehiculo);
	});
}

///modelo del vehiculo aleatorio
function aleatorio(vehiculo) {
	var random = Math.floor(Math.random()*vehiculo.length);
	var random_value = vehiculo[random];
	//console.log(random_value);
	return random_value;
}
/// recorrer y generar para envio
function generar(vehiculo, i, marca) {
	for (let index = 0; index < i; index++) {
		const element_auto = aleatorio(vehiculo);
		const auto_new = new auto_template(marca,element_auto);
		unido.push(auto_new);
	}
}

///enviar datos a object auto


//leer(mazda);
//aleatorio(mazda);
generar(mazda,17,"mazda");
generar(ford,10,"ford");
generar(nissan,20,"nissan");
generar(chevrolet,3,"chevrolet");

leer(unido);

auto.automovil(unido);

/// estructura  = auto.automovil_[0]
// --> auto_template {marca: 'mazda', modelo: 'camioneta 4x4'}

//consultar la primera marca del vehiculo
console.log(auto.automovil_[0]);

//cantidad de vehiculos totales
//cantidad de vehiculos mazada
function conteo(name_vehiculo, cant_total) {
	let num = 0;
	for (let index = 0; index < cant_total; index++) {
		if (auto.automovil_[index].marca == name_vehiculo) {
			num++;
		}
	}
	return num;
}

// n = conteo('mazda', 50);
// //console.log(`numero de vehiculos ${n}`);
// console.log(n);

// //segundo tipo de vehiculo de la tercera marca registrada
// console.log(auto.automovil_[18].modelo);
// //direccion del establecimiento
// console.log(auto.direccion);
// //primer tipo de vehiculo de la primera marca registrada
// console.log(auto.automovil_[0].modelo);

console.log(auto);