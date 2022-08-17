<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salidas.php</title>
</head>
<body>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" 
          crossorigin="anonymous"
    />
    <?php
        //variables de la tabla a recorrer
        $Codigo=$_POST["txtcodigo"];
        $TipoDocumento=$_POST["txttipodocumento"];
        $Cantidad=$_POST["txtcantidad"];
        $TipoClasificacion=$_POST["txttipoclasificacion"];
        $NDocumento=$_POST["txtdocumento"];
        $Precio=$_POST["txtprecio"];
        $Fecha=$_POST["txtfecha"];
        $Proveedor=$_POST["txtproveedor"];
        $Descripcion=$_POST["txtdescripcion"];

        //conexion con la BD creada intertrade 
        $mysqli=new mysqli("localhost","root","","intertrade");
        //query
        $mysqli->query("insert into Entradas values('$Codigo','$TipoDocumento', '$Cantidad', '$TipoClasificacion', '$NDocumento','$Precio', '$Fecha', '$Proveedor', '$Descripcion')");
        $result=$mysqli->query("SELECT * from Entradas");

    ?>
    <div class="table-responsive">
      <table border="1" class="table table-striped table-dark">
        <tr>
          <th>Codigo</th>
          <th>Tipo Documento</th>
          <th>Cantidad</th>
          <th>Tipo Clasificacion</th>
          <th>N° Documento</th>
          <th>Precio</th>
          <th>Fecha</th>
          <th>Proveedor</th>
          <th>Descripcion</th>
        </tr>
        <?php
        //se recorreran los datos de la tabla en la BD
        while($row = $result->fetch_assoc()){
            echo '<tr>
                        <td>'.$row["Código"].'</td>';
            echo        '<td>'.$row["TipoDocumento"].'</td>';
            echo        '<td>'.$row["Cantidad"].'</td>';
            echo        '<td>'.$row["TipoClasificacion"].'</td>';
            echo        '<td>'.$row["NDocumento"].'</td>';
            echo        '<td>'.$row["Precio"].'</td>';
            echo        '<td>'.$row["Fecha"].'</td>';
            echo        '<td>'.$row["Proveedor"].'</td>';
            echo        '<td>'.$row["Descripción"].'</td>
                    
            </tr>';
        }
        //se trae el resultado a mostrar
        mysqli_free_result($result);
      ?>
      </table>

    </div>

</body>
</html>