document.getElementById("nombre").addEventListener("input", function() {
    this.value = this.value.toUpperCase();
    var regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(this.value)) {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    }
});

document.getElementById("comentarios").addEventListener("input", function() {
    this.value = this.value.toUpperCase();
    var regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(this.value)) {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    }
});

document.getElementById("apellido").addEventListener("input", function() {
    this.value = this.value.toUpperCase();
    var regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(this.value)) {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    }
});

var transporteSelect = document.getElementById("transporte");
transporteSelect.addEventListener("change", function() {
    if (transporteSelect.value === "") {
        transporteSelect.value = "NINGUNA";
    }
});

document.getElementById('celular').addEventListener('input', function() {
    // Obtener el valor actual del campo
    let currentValue = this.value;

    // Eliminar todos los caracteres no numéricos del valor actual
    let cleanedValue = currentValue.replace(/\D/g, '');

    // Añadir guiones para formatear el número de celular
    if (cleanedValue.length > 3 && cleanedValue.length <= 6) {
        cleanedValue = cleanedValue.slice(0, 3) + '-' + cleanedValue.slice(3);
    } else if (cleanedValue.length > 6) {
        cleanedValue = cleanedValue.slice(0, 3) + '-' + cleanedValue.slice(3, 6) + '-' + cleanedValue.slice(6);
    }

    // Asignar el valor formateado de vuelta al campo
    this.value = cleanedValue;
});