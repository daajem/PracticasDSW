// Daniel Jimenez Manrique
var opcion = parseInt(prompt("Opcion 1: Calcular peso Marte \nOpcion 2: Calcular peso Jupiter \nOpcion 3: Salir"));

var peso_marte = 639;
var peso_tierra = 5972;
var peso_jupiter = 1898;


switch (opcion) {
    case 1:
        var peso = prompt("Ingresa primero tu peso:")
        var resultado = (peso*peso_marte)/peso_tierra;
        alert("El resultado del peso fue: " + resultado + " trillones de toneladas")
        break;

    case 2:
        var peso = prompt("Ingresa primero tu peso:")
        var resultado = (peso*peso_jupiter)/peso_tierra;
        alert("El resultado del peso fue: " + resultado + " trillones de toneladas")
        break;

    case 3:
        alert("Regrese pronto")
        break;

    default:
        alert("Esta opcion no existe")
        break;

        
}