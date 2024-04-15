// Daniel Jimenez Manrique
document.getElementById("gradesForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores de las asignaturas y notas
    const subjects = [];
    const grades = [];

    for (let i = 1; i <= 8; i++) {
        const subject = document.getElementById(`subject${i}`).value.trim();
        const grade = parseFloat(document.getElementById(`grade${i}`).value.trim());

        // Validar que los campos no estén vacíos
        if (subject === "" || isNaN(grade)) {
            alert("Por favor, complete todos los campos.");
            document.getElementById(`subject${i}`).focus();
            return;
        }

        subjects.push(subject);
        grades.push(grade);
    }

    // Calcular el promedio
    const totalGrades = grades.reduce((acc, curr) => acc + curr, 0);
    const average = totalGrades / grades.length;

    let message = "";

    // Construir el mensaje con las calificaciones
    for (let i = 0; i < subjects.length; i++) {
        message += `En ${subjects[i]} has sacado ${grades[i]}\n`;
    }

    // Mostrar el promedio y el estado
    message += `Promedio final: ${average.toFixed(2)}\n`;
    if (average >= 85) {
        message += "¡Estás exento de ordinario!";
    } else {
        message += "Debes presentar examen ordinario.";
    }

    // Mostrar el mensaje en un alert
    alert(message);
});
