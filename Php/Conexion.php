
<?php
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "intertrade";

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

if(!$conn)
{
    die("No hay conexion :(");
}

?>

