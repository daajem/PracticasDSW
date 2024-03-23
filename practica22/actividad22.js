// Daniel Jimenez Manrique

// var i = 10;

// while (i <= 20){
//     alert(i);
//     i = i + 2;
// }

// do {
//     i += 1;
//     alert(i);
// } while (i < 5)


// - Investigar propiedades de los arreglos (visualizar, agregar, eliminar elementos). Realice un arreglo con los días de la
// semana (utilice las propiedades investigadas).

// 1. Propiedades de los arreglos en JavaScript

// let diasDeLaSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

// // Agregar domingo al final
// diasDeLaSemana.push('Domingo');

// // Eliminar el Lunes del principio
// diasDeLaSemana.shift();

// alert(diasDeLaSemana);



// - Utilice while para sumar los números del 1 al 5. (deberá obtener como resultado 15).

// 2. Sumar los números del 1 al 5 usando un bucle while

// let suma = 0;
// let i = 1;

// while(i <= 5) {
//     suma += i;
//     i++;
// }

// alert(suma);


// - Con do while, obtenga el factorial del número 5. (obtener como resultado 120).

// 3. Factorial de 5 usando un bucle do...while

let numero = 5;
let resultado = 1;

do {
    resultado *= numero;
    numero--;
} while (numero > 0);

alert(resultado); 



// - Investigar for in, forEach, for of. Realice un ejemplo con cada uno de los for con un arreglo que contenga los primeros 11
// meses del año.

// 1. For in

//var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'];

// for (var index in meses) {
//     alert(meses[index]);
// }

// 2. forEach

// meses.forEach(function(mes) {
//     alert(mes)
// });

// 3. for...of

//for (var mes of meses) {
    //alert(mes)
//}

