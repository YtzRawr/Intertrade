<?php
    include 'Conexion.php';
?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>entradas.php</title>

     <!-- CSS Bootstrap v5-->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
      <!-- CSS Main -->
      <link rel="stylesheet" href="../css/main.css" />
    </head>
    <body>
    
  <nav class="navbar 
        navbar-expand-md 
        navbar-light
        fixed-top 
        bg-light 
        navbar-main ">
    <!--NavBar-->
    <div class="container">
      <!--Branding-->
      <a href="" class="navbar-brand ">
        <img src="../img/logo_intertrade11-e1628631558703.webp" alt="Intertrade">
      </a>
      <!--Button-->
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav"
        aria-expanded="flase" aria-label="Barra de navegacion">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!--Items-->
      <div class="collapse navbar-collapse" id="mainNav">
        <div class="nav ms-auto text-dark">
          <a href="../poductos.html" class="nav-link">Productos</a>
          <a href="entradas.php" class="nav-link">Entradas</a>
          <a href="salidas.html" class="nav-link">Salidas</a>
          <a href="buscar.html" class="nav-link">Buscar</a>
          <a href="../proveedor.html" class="nav-link">Proveedor</a>
        </div>
      </div>
    </div>
  </nav><br><br><br><br><br><br>
  <?php
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
    $conn->query("insert into Entradas values(NULL,'$ProductoId','$ProveedorId','$TipoDocumento', '$Cantidad', '$TipoClasificacion', '$NDocumento','$Precio', '$Fecha')");


    $result=$conn->query("SELECT * from Entradas");
  ?>
      <div class="table-responsive">
      <table border="1" class="table table-striped table-dark">
        <tr>
          <th>ID</th>
          <th>Producto</th>
          <th>Proveedor</th>
          <th>Tipo documento</th>
          <th>Cantidad</th>
          <th>Tipo clasificacion</th>
          <th>N° documento</th>
          <th>Precio</th>
          <th>Fecha</th>
        </tr>
        <?php
        //se recorreran los datos de la tabla en la BD
        while($row = $result->fetch_assoc()){
            echo '<tr>
                        <td>'.$row["ID"].'</td>';
            echo        '<td>'.$row["Producto_ID"].'</td>';
            echo        '<td>'.$row["Proveedor_ID"].'</td>';
            echo        '<td>'.$row["TipoDocumento"].'</td>';
            echo        '<td>'.$row["Cantidad"].'</td>';
            echo        '<td>'.$row["TipoClasificacion"].'</td>';
            echo        '<td>'.$row["NDocumento"].'</td>';
            echo        '<td>'.$row["Precio"].'</td>';
            echo        '<td>'.$row["Fecha"].'</td>
                    
            </tr>';
        }
        //se trae el resultado a mostrar
        mysqli_free_result($result);
      ?>
      </table>

    </div>
    </body>
</html>