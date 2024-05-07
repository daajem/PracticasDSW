<?php
$servidor = "localhost";
$puerto = "3306";
$usuario = "root";
$clave = "";
$bd = "bd_formulario";

$conexion = mysqli_connect($servidor . ":" . $puerto, $usuario, $clave, $bd);

if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Actividad 30</title>
    <link rel="stylesheet" href="actividad30.css">
</head>
<body>

    <form action="#" name="bd_formulario" method="POST">
        <div id="nombre-completo">
        <label>NOMBRE(S)</label> <br>
        <input id="nombre" name="nombre" type="text" placeholder="JOHN"> <br>

        <label>APELLIDO(S)</label> <br>
        <input id="apellido" name="apellido" type="text" placeholder="DOE"> <br>
        </div>

        <div id="edad-sexo">
        <label>EDAD</label> <br>
        <input id="edad" name="edad" type="number" placeholder="18" min="18" max="60"> <br>
        
        <label>SEXO</label> <br>
        <select id="sexo" name="sexo">
            <option value="">ESCOGE UNA OPCION</option>
            <option value="OTRO">PREFRIERO NO MENCIONARLO</option>
            <option value="FEMENINO">FEMENINO</option>
            <option value="MASCULINO">MASCULINO</option>
        </select> <br>
        </div>

        <label>CELULAR (10 DIGITOS)</label> <br>
        <input id="celular" name="celular" type="text" placeholder="664-123-45-67" maxlength="12"> <br>

        <label>CIUDAD</label> <br>
        <select id="cuidad" name="cuidad" onchange="opcionTransporte()">
            <option value="">ESCOGE UNA OPCION</option>
            <option value="TIJUANA">TIJUANA</option>
            <option value="MEXICALI">MEXICALI</option>
            <option value="ROSARITO">ROSARITO</option>
            <option value="ENSENADA">ENSENADA</option>
            <option value="TECATE">TECATE</option>
        </select> <br>
        
        <div id="transporte" style="display:none;">
        <label>TRANSPORTE</label> <br>
        <select id="transporte" name="transporte">
            <option value="">ESCOGE UN OPCION</option>
            <option value="SI">SI</option>
            <option value="NO">NO</option>
        </select> <br>
        </div>

        <div id="camisa-talla">
        <label>CAMISA</label> <br>
        <select id="camisa" name="camisa" onchange="opcionCamisa()">
            <option value="">ESCOGE UN OPCION</option>
            <option value="SI">SI</option>
            <option value="NO">NO</option>
        </select> <br>

        <div id="talla" style="display:none;">
        <label>TALLA</label> <br>
        <select id="talla" name="talla" >
            <option value="">ESCOGE UN OPCION</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
        </select> <br>
        </div>

        </div>
        
        <label>COMENTARIOS</label> <br>
        <textarea id="comentarios" name="comentarios" size="15" cols="80" rows="5" placeholder="ESCRIBENOS ALGUNOS COMENTARIOS"></textarea>

        <input type="submit" name="Enviar">
    
    </form>
    <script src="actividad30.js"></script>
</body>
</html>

<?php
if (isset($_POST['Enviar'])) {
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $edad = $_POST['edad'];
    $sexo = $_POST['sexo'];
    $celular = $_POST['celular'];
    $cuidad = $_POST['cuidad'];
    $transporte = $_POST['transporte'];
    $camisa = $_POST['camisa'];
    $talla = $_POST['talla'];
    $comentarios = $_POST['comentarios'];

    $guardar = "INSERT INTO usuarios (nombre, apellido, edad, sexo, celular, cuidad, transporte, camisa, talla, comentarios) VALUES ('$nombre', '$apellido','$edad','$sexo','$celular','$cuidad','$transporte','$camisa','$talla','$comentarios')";

    $ejecutar = mysqli_query($conexion, $guardar);

    if ($ejecutar) {
        echo "Registro exitoso";
    } else {
        echo "Error al registrar: " . mysqli_error($conexion);
    }
}
?>