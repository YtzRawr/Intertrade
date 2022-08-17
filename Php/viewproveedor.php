<?php
    include 'Conexion.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>viewproveedor.php</title>
      <!-- CSS Bootstrap v5-->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
  <!-- CSS Main -->
  <link rel="stylesheet" href="../css/main.css" />
</head>
<body class=bg-light>
<!--Navbar-->
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
          <a href="../entradas.html" class="nav-link">Entradas</a>
          <a href="../salidas.html" class="nav-link">Salidas</a>
          <a href="../buscar.html" class="nav-link">Buscar</a>
          <a href="../clientes.html" class="nav-link">Clientes</a>
          <a href="../proveedor.html" class="nav-link">Proveedor</a>
        </div>
      </div>
    </div>
  </nav><br><br><br><br><br><br>
<div class="table-responsive">
      <table border="1" class="table table-striped table-info">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Direccion</th>
          <th>Pais</th>
          <th>Descripcion</th>
          <th>Telefono</th>
          <th>Articulo 1</th>
          <th>Articulo 2</th>
          <th>Articulo 3</th>
        </tr>
        <?php
        $result=$conn->query("SELECT * from Proveedores");
        //se recorreran los datos de la tabla en la BD
        while($row = $result->fetch_assoc()){
            echo '<tr>
                        <td>'.$row["ID"].'</td>';
                        echo        '<td>'.$row["Nombre"].'</td>';
                        echo        '<td>'.$row["Dirección"].'</td>';
                        echo        '<td>'.$row["Pais"].'</td>';
                        echo        '<td>'.$row["Descripción"].'</td>';
                        echo        '<td>'.$row["Telefono"].'</td>';
                        echo        '<td>'.$row["Artículos"].'</td>';
                        echo        '<td>'.$row["Articulo2"].'</td>';
                        echo        '<td>'.$row["Articulo3"].'</td>
                    
            </tr>';
        }
        //se trae el resultado a mostrar
        mysqli_free_result($result);
      ?>
      </table>
</body>
</html>

    </div>