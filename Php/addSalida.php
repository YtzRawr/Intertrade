<?php
    include 'Conexion.php';

    //variables de la tabla a recorrer
    $Cliente=$_POST["txtcliente"];
    $Producto=$_POST["txtproducto"];
    $Valor=$_POST["txtvalor"];
    $Cantidad=$_POST["txtcantidad"];
    $TipoClasificacion=$_POST["txtclasificacion"];
    $TipoDocumento=$_POST["txttipodocumento"];
    $Cantidad=$_POST["txtcantidad"];
    $Fecha=$_POST["txtfecha"];
    //query
    echo "NULL,'$TipoClasificacion','$Fecha','$Valor', '$Cantidad', '$TipoDocumento','$Cliente', '$Producto')";
    $conn->query("insert into Salidas values(NULL,'$TipoClasificacion','$Fecha','$Valor', '$Cantidad', '$TipoDocumento','$Cliente', '$Producto')");

    //If  y else para poder determinar el tipo de clasificacion que se restara segun el tipo de clasificacion a su respectiva columna
    if($TipoClasificacion == "C"){
        $conn->query("UPDATE Productos SET Cantidad=Cantidad - $Cantidad WHERE ID = $Producto");
    }
    elseif($TipoClasificacion == "R"){
        $conn->query("UPDATE Productos SET Cantidad_Reparacion=Cantidad_Reparacion - $Cantidad WHERE ID = $Producto");
    }
    elseif($TipoClasificacion == "A"){
        $conn->query("UPDATE Productos SET Cantidad_Arriendo=Cantidad_Arriendo - $Cantidad WHERE ID = $Producto");
    }


?>