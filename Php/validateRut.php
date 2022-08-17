<?php
include 'Conexion.php';
//query para validar si el rut ya esta registrado en la base de datos o no
$result=$conn->query("SELECT Rut FROM `Clientes` WHERE Rut = '".$_POST["rut"]."'");

if($result->num_rows === 0)
{
    echo "valido";
} else {
    echo "invalido";
}
?>