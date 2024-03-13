function ingresarOperacion() {

    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var suma = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;
    var division = num1 / num2;
    
    alert("El resultado de la suma es: " + suma + 
    "\nDe la resta es: " + resta + 
    "\nDe la multiplicacion: " + multiplicacion + 
    "\nDe la division: " + division );

}

function realizarOperacion() {

    var num1 = 10
    var num2 = 10
    var suma = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;
    var division = num1 / num2;
    
    alert("El resultado de la suma es: " + suma + 
    "\nDe la resta es: " + resta + 
    "\nDe la multiplicacion: " + multiplicacion + 
    "\nDe la division: " + division );

}


