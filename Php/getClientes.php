<?php
include 'Conexion.php';
            
$result = $conn->query("SELECT * from Clientes");

$clientes = [];

while($row = $result->fetch_assoc()){
    $clientes[] = [
        "id" => $row["ID"],
        "nombre" => $row["Nombre"],
        "rut" => $row["Rut"]
    ];
}

echo json_encode($clientes);
?>