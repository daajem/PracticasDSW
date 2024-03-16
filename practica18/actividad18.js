// Daniel Jimenez Manrique
var diasSemana = [];

function capturarDias() {
    for (var i = 0; i < 7; i++) {
        var dia = prompt("Ingrese el día de la semana #" + (i + 1));
        diasSemana.push(dia);
    }
}

function desplegarDias() {
    var mensaje = "Días de la semana:\n";
    for (var i = 0; i < diasSemana.length; i++) {
        mensaje += diasSemana[i] + "\n";
    }
    alert(mensaje);
}

