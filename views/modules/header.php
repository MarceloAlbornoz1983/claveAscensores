<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Ascensores Clave</title>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/font-awesome.css">
    <link rel="stylesheet" href="css/imagehover/css/imagehover.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" type="image/png" href="images/logo/logo-superior2.png">

    <!-- <script type="text/javascript" src="js/cssrefresh.js"></script> -->
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    <script type="text/javascript" src="js/jquery.elevatezoom.min.js"></script>
    
    <script>
    //PreLoader
    window.onload = function(){
    var contenedor = document.getElementById("container-carga");
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0.5';
    }
    // Fin PreLoader
    </script>
  </head>
  <body>
    <!-- PreLoader -->
    <div id="container-carga">
      <div class="puerta-izq"></div>
      <div class="puerta-der"></div>
      <div class="carga">
        <div class="carga-exterior"><div class="carga-triangulo"></div></div>
        <div class="carga-centro"></div>
      </div>
    </div>
    <!-- Fin PreLoader -->
    <section class="emergencias" id=emergency>
      
      <div class="baliza"><img src="images/baliza.png" alt="" id="baliza"></div>
      <a href="tel:+56950049869"><img src="images/emergencias.jpg" alt="emergencias" id="emergencia"></a>
    </section>
    <!-- Header -->
    <header>
      
      <div class="cabecera">
        
        <div id="logo">
          <a href="inicio"><img src="images/logo/logo-nuevo.jpg" class="d-inline-block align-top" alt=""></a>
        </div>
        <!-- </div> -->
        <div class="emergency">
          <div class="emergency-container"></div>
        </div>
        <input type="checkbox" id="btn-menu">
        <label for="btn-menu" class="fa fa-bars" id="icon-menu"></label>
        <nav class="menu">
          <ul>
            <li>
              <a class="<?php $host = $_SERVER["REQUEST_URI"]; if($host == '/inicio' || $host == '/') {echo 'active';}; ?>" href="inicio">Clave</a>
            </li>
            <li>
              <a class="<?php $host = $_SERVER["REQUEST_URI"]; if($host == '/nosotros') {echo 'active';}; ?>" href="nosotros">Empresa</a>
            </li>
            <li class="submenu">
              <a class="<?php $host = $_SERVER["REQUEST_URI"]; if($host == '/servicios' ||
                              $host == '/instalaciones' ||
                              $host == '/mantenciones' ||
                              $host == '/reparaciones' ||
                              $host == '/modernizacion' ||
                              $host == '/emergencias' ||
                              $host == '/normalizacion') {echo 'active';}; ?>"
                              href="#">Servicios<span class="fa fa-chevron-down" id="menu-down"></span></a>
                <ul>
                  <li><a href="instalaciones">Instalaciones</a></li>
                  <li><a href="mantenciones">Mantenciones</a></li>
                  <li><a href="reparaciones">Reparaciones</a></li>
                  <li><a href="modernizacion">Modernizacion</a></li>
                  <li><a href="emergencias">Emergencias</a></li>
                  <li><a href="normalizacion">Normalizaciones</a></li>
                </ul>
              </li>
              <li>
                <a class="<?php $host = $_SERVER["REQUEST_URI"]; if($host == '/contacto') {echo 'active';}; ?>" href="contacto">Contactenos</a>
              </li>
            </ul>
            <!-- </div> -->
          </nav>
          <!-- </div> -->
          <!-- <div class="col-12 col-sm-6 d-flex justify-content-end" id="emergencia">
            <h2 id="title-emergencia"><span id="logo-emergencia"><i class="fa fa-phone"></i></span> <strong>Emergencias</strong><br> <span id="fono-emergencia">800-123-425</span></h2>
          </div>-->
        <!-- </div>
        -->
        
      </header>
      <!-- Fin Header -->