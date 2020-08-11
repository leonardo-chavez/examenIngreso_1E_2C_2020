/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{

	let cantProductos = 0;
	let queProd;
	let marca;
	let precio = 0;
	let precioMax = 0;

	let peso;
	let pesoMasLiviano;

	let pesoTotal = 0;

	let marcaMasCara;
	let marcaMasLiviana;

	let flagCaro = 0;
	let flagLiviano = 0;
	let respuesta = "si";

	do
	{
	
		do 
		{

	
			queProd = prompt(" que producto es (solido/liquido)");



		} while(!(queProd == "solido" || queProd == "liquido"));

		do 
		{

			precio = parseInt(prompt("Ingrese precio"));
			marca = prompt("Ingrese marca")

			if ((flagCaro == 0 || precio > precioMax) && queProd == "liquido") 
			{
			precioMax = precio;
			marcaMasCara = marca;
			flagCaro = 1;
			}




		} while(!(precio > 0))

		do 
		{

			peso = parseFloat(prompt("Ingrese peso"));

			pesoTotal = pesoTotal + peso;

			if (flagLiviano == 0 || pesoMasLiviano < peso && queProd == "solido") 
			{
			pesoMasLiviano = peso;
			marcaMasLiviana = marca;
			flagLiviano = 1;


			}	




		} while(!(peso > 0));










	respuesta = prompt(" queres agregar otro producto? si/no");

} while(respuesta == "si");


console.log("a)El peso total de la compra es de " + acumuladorPeso);
console.log("b)la marca del más caro de los líquidos: " + banderaLiquido);
console.log("c)la marca del más liviano de los sólidos: " + banderaSolido);




}