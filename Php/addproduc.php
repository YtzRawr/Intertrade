<?php
    include 'Conexion.php';

    //variables de la tabla a recorrer
    $Modelo=$_POST["txtmodelo"];
    $Marca=$_POST["txtmarca"];
    $Descripcion=$_POST["txtdescripcion"];
    $Precio=$_POST["txtprecio"];
    //query
    $conn->query("insert into Productos values(NULL, '$Modelo', '$Marca', '$Descripcion', '$Precio', 0,0,0)");

    echo "todo ok";
?>


