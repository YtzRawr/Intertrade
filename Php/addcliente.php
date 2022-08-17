<?php
    include 'Conexion.php';

    //variables de la tabla a recorrer
    $Nombre=$_POST["txtnombre"];
    $Apellido=$_POST["txtapellido"];
    $Rut=$_POST["txtrut"];
    $Telefono=$_POST["txttelefono"];
    $Direccion=$_POST["txtdireccion"];

    //query
    $conn->query("insert into Clientes values(NULL, '$Nombre', '$Apellido', '$Rut', '$Telefono','$Direccion')");

    echo "todo ok";
?>


