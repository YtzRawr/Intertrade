<?php
include 'Conexion.php';
//query para validar si el proveedor ya esta registrado en la base de datos o no
$result=$conn->query("SELECT Nombre FROM `Proveedores` WHERE Nombre = '".$_POST["Nombre"]."'");

if($result->num_rows === 0)
{
    echo "valido";
} else {
    echo "invalido";
}
?>