<!DOCTYPE html>
<html lang="en">
<head>
  <title>Laravel Valet WebServer</title>
  <meta charset="utf-8">
  <meta name="color-scheme" content="dark light">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <!-- favicon -->
  <link rel="shortcut icon" type="image/x-icon" href="https://server.test/favicon.ico">
  <link rel="apple-touch-icon" href="https://server.test/assets/img/apple-touch-icon.png">

  <link rel="stylesheet" href="assets/css/modern-normalize.css">
  <link rel="stylesheet" href="assets/font-awesome-5/css/fontawesome.min.css">
  <link rel="stylesheet" href="assets/font-awesome-5/css/brands.min.css">
  <link rel="stylesheet" href="assets/font-awesome-5/css/solid.min.css">
  <link rel="stylesheet" href="assets/css/styles.css">

</head>
<body>

  <div class="logo">
    <img src="assets/img/laravel-logo.svg" alt="">
    <!-- <img src="assets/img/laravel-word-logo.svg" alt=""> -->
    <img src="assets/img/laravel-valet.svg" style="width: auto; height: 32px;" alt="">
    <a href="https://github.com/laravel/valet/releases">v.2.10.3</a>
  </div>

  <p class="menu">
    <span><a href="https://laravel.com/docs/valet" target="_blank"><i class="fab fa-laravel"></i> Valet Docs</a></span>
    <span><a href="https://github.com/laravel/valet" target="_blank"><i class="fab fa-github"></i> Valet GitHub</a></span>
    <span><a href="info.php"><i class="fab fa-php"></i> PHP info v.<?php echo phpversion(); ?></a></span>
    <span><a href="https://phpmyadmin.test"><i class="fab fa-php"></i> phpMyAdmin</a>
      <!-- <br><small>/usr/local/share/phpmyadmin</small><br><small>/usr/local/var/mysql</small> -->
    </span>
  </p>

  <!-- <input id="filterInput" type="text" placeholder="Filter List"> -->

  <table class="valetlinks"></table>

  <?php
    require_once 'vendor/erusev/parsedown/Parsedown.php';
    $valet_links = file_get_contents('valet_links.md');
    $Parsedown = new Parsedown();
    echo '<pre id="md-table">';
    echo $Parsedown->text($valet_links);
    echo '</pre>';
  ?>

  <script src="assets/js/scripts.js"></script>

</body>
</html>
