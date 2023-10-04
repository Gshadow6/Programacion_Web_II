<?php
  include "header.php";
?>

<body>
  <form action="respuesta.php" method="get">
    <h2 style="display: inline-block;">Nombre: </h2> 
    <input type="text" name="txtnombre">

    <br>
    <h2 style="display: inline-block;">Edad: </h2>
    <input type="text" name="txtedad">
    
    <br>
    <h2 style="display: inline-block;">Correo: </h2>
    <input type="text" name="txtcorreo">   
    
    <br>
    <h2 style="display: inline-block;">Contraseña: </h2>
    <input type="text" name="txtcontra">
    
    <br>
    <button>Enviar</button>
  </form>
  <br>
  <br>
</body>

<?php
  include "footer.php";
?>
