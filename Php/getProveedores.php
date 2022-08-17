<?php
include 'Conexion.php';
            
$result = $conn->query("SELECT * from Proveedores");

$proveedores = [];

while($row = $result->fetch_assoc()){
    $proveedores[] = [
        "id" => $row["ID"],
        "nombre" => $row["Nombre"]
    ];
}

echo json_encode($proveedores);
?>