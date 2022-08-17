<?php
    include 'Conexion.php';

    //variables de la tabla a recorrer
    $ProductoId=$_POST["ProductoId"];
    $ProveedorId=$_POST["ProveedorId"];
    $TipoDocumento=$_POST["txttipodocumento"];
    $Cantidad=$_POST["txtcantidad"];
    $TipoClasificacion=$_POST["txttipoclasificacion"];
    $NDocumento=$_POST["txtdocumento"];
    $Precio=$_POST["txtprecio"];
    $Fecha=$_POST["txtfecha"];
    //query
    echo "NULL,'$ProductoId','$ProveedorId','$TipoDocumento', '$Cantidad', '$TipoClasificacion', '$NDocumento','$Precio', '$Fecha')";
    $conn->query("insert into Entradas values(NULL,'$ProductoId','$ProveedorId','$TipoDocumento', '$Cantidad', '$TipoClasificacion', '$NDocumento','$Precio', '$Fecha')");

    //If para poder determinar el tipo de clasificacion que se agregara y segun el cual se agregue se agregara a su respectiva columna
    if($TipoClasificacion == "co"){
        $conn->query("UPDATE Productos SET Cantidad=Cantidad + $Cantidad WHERE ID = $ProductoId");
    }
    elseif($TipoClasificacion == "re"){
        $conn->query("UPDATE Productos SET Cantidad_Reparacion=Cantidad_Reparacion + $Cantidad WHERE ID = $ProductoId");
    }
    elseif($TipoClasificacion == "ar"){
        $conn->query("UPDATE Productos SET Cantidad_Arriendo=Cantidad_Arriendo + $Cantidad WHERE ID = $ProductoId");
    }



    


?>