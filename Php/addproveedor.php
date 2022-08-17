<?php

  include 'Conexion.php';
?>  
      <?php
        //variables de la tabla a recorrer
        $Nombre=$_POST["txtnombre"];
        $Direccion=$_POST["txtdireccion"];
        $Pais=$_POST["txtpais"];
        $Descripcion=$_POST["txtdescripcion"];
        $Telefono=$_POST["txttelefono"];
        $Articulos=$_POST["txtarticulos"];
        $Articulo2=$_POST["txtarticulo2"];
        $Articulo3=$_POST["txtarticulo3"];
        //conexion con la BD creada intertrade 
        //query
        $conn->query("insert into Proveedores values(NULL,'$Nombre','$Direccion','$Pais','$Descripcion','$Telefono','$Articulos','$Articulo2','$Articulo3')");
       /*
        if(!empty(NULL)){
          if(mysql_num_rows($result)!=1){
            print("ERROR,Proveedor ya registrado!");
          }
        }
        */
    ?>
