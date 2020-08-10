/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {

    let sexoTitular;
    let banderaTitular=0;
    let respuesta="si";
    let lugar;
    let temporada;
    let cantidadPersonasViajando=0;
    let contadorBariloche=0;
    let contadorCataratas=0;
    let contadorSalta=0;
    let personasInvierno=0;
    let promedioPersonasInvierno=0;
    let lugarMasElegido;


    while (respuesta == "si") {
        sexoTitular=prompt("sexo del titular: ");
        lugar=prompt("Ingrese el lugar: ").toLowerCase();
        while(!(lugar == "bariloche" || lugar == "“cataratas”" || lugar == "“salta”" )){
            lugar=prompt("Error. Ingrese el lugar: ").toLowerCase();   
        }
        if(lugar == "bariloche"){
            contadorBariloche++;
        }else if(lugar == "cataratas"){
            contadorCataratas++;
        }else{
            contadorSalta++;
        }
        temporada=prompt("Ingrese la temporada: ").toLowerCase();
        while (!(temporada == "otoño" || temporada == "invierno" || temporada == "verano" || temporada == "primavera")) {
            temporada=prompt("Error. Ingrese la temporada: ").toLowerCase();    
        }
        cantidadPersonasViajando=parseInt(prompt("Cantidad de personas viajando : "));
        while (cantidadPersonasViajando<1) {
            cantidadPersonasViajando=parseInt(prompt("Error. Cantidad de personas viajando : "));
        }
        if(banderaTitular==0 || cantidadPersonasViajando>banderaTitular){
            banderaTitular=sexoTitular;
        }
        switch (temporada) {
            case "otoño":
                
                break;                
            case "invierno":
                promedioPersonasInvierno++  
                personasInvierno=cantidadPersonasViajando; 
                break;
            case "verano":
                
                break;        
            default:

                break;
        }
              if(contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta){
                  lugarMasElegido="Bariloche";
              }else if(contadorCataratas >= contadorBariloche && contadorCataratas > contadorSalta){
                  lugarMasElegido="Cataratas";
              }else{
                  lugarMasElegido="Salta";
              } 
    }
    console.log("a)el lugar más elegido " + lugarMasElegido);
    console.log("b)el nombre de titular que lleva más pasajeros. " + banderaTitular);
    if(promedioPersonasInvierno>0){
        console.log("c)el promedio de personas por viaje " + promedioPersonasInvierno +",  que viajan en invierno " + (personasInvierno/promedioPersonasInvierno));
    }
    
    
}