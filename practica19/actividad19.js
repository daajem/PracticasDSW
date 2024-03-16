// Daniel Jimenez Manrique

function actividad19 () {

    var valores = [true, 10, false, "codigo", "herramientas", 7];
    // Determinar cuál de los dos elementos de texto es mayor
    var texto1 = valores[3];
    var texto2 = valores[4];
    var textoMayor = texto1.length > texto2.length ? texto1 : texto2;
    alert("El texto mayor es:" + textoMayor);
    
    // Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
    var bool1 = valores[0];
    var bool2 = valores[2];
    var resultadoTrue = bool1 || bool2;
    var resultadoFalse = bool1 && bool2;
    alert("Operadores para obtener true:" + resultadoTrue + "\nOperadores para obtener false:" + resultadoFalse);


    // Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
    var num1 = valores[1];
    var num2 = valores[5];
    var suma = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;
    var division = num1 / num2;
    var modulo = num1 % num2;

    alert("Suma: " + suma + "\nResta: " + resta + "\nMultplicacion:" + multiplicacion + "\nDivision: " + division + "\nModul: " + modulo);

}

