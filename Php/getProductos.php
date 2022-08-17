<?php
include 'Conexion.php';
            
$result = $conn->query("SELECT * from Productos");

$productos = [];

while($row = $result->fetch_assoc()){
    $productos[] = [
        "id" => $row["ID"],
        "modelo" => $row["Modelo"],
        "marca" => $row["Marca"],
        "precio" => $row["Precio"],
        "cantidad" => $row["Cantidad"],
        "cantidad_reparacion" => $row["Cantidad_Reparacion"],
        "cantidad_arriendo" => $row["Cantidad_Arriendo"],
    ];
}

echo json_encode($productos);
?>