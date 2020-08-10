/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar(){
	let nombre;
	let edad=0;
	let sexo;
	let Peso;
	let cantidadF=0;
	let cantidadM=0;
	let banderaNombre;
	let banderaPeso=0;
	
	for (let i = 1; i <= 5; i++) {
		nombre = prompt("Cual es tu nombre: ");
		banderaPeso = parseFloat(prompt(" cual es tu peso actual: "));
		sexo = prompt("Ingresar tu sexo: F/M").toLowerCase();
		while (!(sexo == "f" || sexo == "m")) {
			sexo = prompt("Error. Ingresar tu sexo: F/M").toLowerCase();
		}
		if(sexo=="f"){
			cantidadF++;
		}else{
			cantidadM++;
		}
		edad = parseInt(prompt("Ingresar tu edad"));
		if(banderaPeso == 0 || sexo == "f" && Peso>banderaPeso){
			banderaNombre=nombre;
			banderaPeso=Peso;
		}
		console.log(i + " Nombre: " + nombre + " y su sexo " + sexo);        
	}
		if(cantidadF>0){
			console.log("Cantidad mujeres " + cantidadF);
		}
		else if(cantidadM>0){
			console.log("Cantidad hombres " + cantidadM);
		}
		console.log("Edad promedio "+ (edad/5));
		if(!(banderaTemperatura == 0)){
			console.log("La mujer con mas peso es " + banderaNombre + " y su peso es " +banderaPeso);
		}
	}