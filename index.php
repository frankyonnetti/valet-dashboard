<?php
  require_once 'vendor/erusev/parsedown/Parsedown.php';
  $Parsedown = new Parsedown();
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Laravel Valet WebServer</title>
  <meta charset="utf-8">
  <meta name="color-scheme" content="dark light">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <!-- favicon -->
  <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">

  <link rel="stylesheet" href="assets/css/modern-normalize.css">
  <link rel="stylesheet" href="/assets/fonts/fontawesome-free-5/css/all.min.css">
  <link rel="stylesheet" href="assets/css/styles.css">

</head>
<body>

  <div class="logo">
    <img src="assets/img/laravel-logo.svg" alt="">
    <!-- <img src="assets/img/laravel-word-logo.svg" alt=""> -->
    <img src="assets/img/laravel-valet.svg" style="width: auto; height: 32px;" alt="">
    <?php
      echo '<a class="server-version" href="https://github.com/laravel/valet/releases">';
      echo $Parsedown->text( file_get_contents('valet_version.md') );
      echo '</a>';
    ?>
  </div>

  <p class="menu">
    <span><a href="https://laravel.com/docs/valet"><i class="fab fa-laravel"></i> Valet Docs</a></span>
    <span><a href="https://github.com/laravel/valet"><i class="fab fa-github"></i> Valet GitHub</a></span>
    <span><a href="info.php"><i class="fab fa-php"></i> PHP info v.<?php echo phpversion(); ?></a></span>
    <span><a href="https://phpmyadmin.test"><i class="fab fa-php"></i> phpMyAdmin</a></span>
  </p>

  <!-- <input id="filterInput" type="text" placeholder="Filter List"> -->

  <table class="valetlinks"></table>

  <?php
    echo '<pre id="md-table">';
    echo $Parsedown->text( $valet_links = file_get_contents('valet_links.md') );
    echo '</pre>';
  ?>

  <script src="assets/js/scripts.js"></script>

</body>
</html>
