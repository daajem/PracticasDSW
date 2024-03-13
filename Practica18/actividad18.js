
function capturarDiasSemana() {
    var diasSemana = [];

    for (var i = 0; i < 7; i++) {
        var dia = prompt("Ingrese el día " + (i + 1) + " de la semana:");

        
        if (dia !== null && dia !== "") {
            diasSemana.push(dia);
        } else {
            i--;
        }
    }
    mostrarDiasSemana(diasSemana);
}

function mostrarDiasSemana(diasSemana) {
    var mensaje = "Los días de la semana capturados son:\n";
    for (var i = 0; i < diasSemana.length; i++) {
        mensaje += (i + 1) + ". " + diasSemana[i] + "\n";
    }

    alert(mensaje);
}
capturarDiasSemana();
