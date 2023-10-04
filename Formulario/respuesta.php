<?php
    include "header.php";
    
        $nombre= $_GET["txtnombre"];
        $edad= $_GET["txtedad"];
        $correo= $_GET["txtedad"];
        $contra= $_GET["txtcontra"];

        echo "<h2>Nombre:".$nombre."</h2>";
        echo "<h2>Edad:".$edad."</h2>";
        echo "<h2>Correo:".$correo."</h2>";
        echo "<h2>Contraseña:".$contra."</h2>";
        
    include "footer.php";
?>