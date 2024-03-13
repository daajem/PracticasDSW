function ejercicio19 () {
    var valores = [true, 10, false, "codigo", "herramientas", 7];
    // Determinar cuál de los dos elementos de texto es mayor
    var texto1 = valores[3];
    var texto2 = valores[4];
    var textoMayor = texto1.length > texto2.length ? texto1 : texto2;
    alert("El texto más largo es: " + textoMayor);

    //  Utilizar exclusivamente los dos valores booleanos del array para obtener un resultado true y otro resultado false
    var resultadoTrue = valores[0] || valores[2]; // true || false
    var resultadoFalse = valores[0] && valores[2]; // true && false
    alert("Resultado true: " + resultadoTrue + 
    "\nResultado false: " + resultadoFalse);

    var num1 = valores[1];
    var num2 = valores[5];
    var suma = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;
    var division = num1 / num2;
    var modulo = num1 % num2;

    alert("El resultado de la suma es: " + suma + 
    "\nDe la resta es: " + resta + 
    "\nDe la multiplicacion: " + multiplicacion + 
    "\nDe la division: " + division +
    "\nDel modulo " + modulo);

}

