<!DOCTYPE html>
<html lang="en">
<head>

  <title>Laravel Valet Dashboard</title>
  <meta charset="utf-8">
  <meta name="color-scheme" content="dark light">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
  <link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png">

  <link rel="stylesheet" href="assets/css/modern-normalize.css">
  <link rel="stylesheet" href="assets/fonts/fontawesome-free-5/css/all.min.css">
  <link rel="stylesheet" href="assets/css/styles.css">

</head>
<body id="valet-server" class="color-mode">

  <div class="container color-mode">

    <div class="content color-mode">
      <table class="valetlinks-container"></table>
    </div>

    <aside class="sidebar color-mode">

      <div class="logo color-mode">
        <span class="logo-img">Laravel Valet</span>
        <a class="server-version" href="https://github.com/laravel/valet/releases">
          <?php include('valet_version.html'); ?>
        </a>
      </div>

      <ul class="menu color-mode">
        <li class="sidebar-label"><i class="fas fa-book"></i> Docs</li>
        <li>
          <a href="https://laravel.com/docs/valet">
            <i class="fab fa-laravel"></i> <span>Valet Docs</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/laravel/valet">
            <i class="fab fa-github"></i> <span>Valet GitHub</span>
          </a>
        </li>
        <li>
          <a href="info.php">
            <i class="fab fa-php"></i> <span>PHP info v.<?php echo phpversion(); ?></span>
          </a>
        </li>
        <li>
          <a href="https://phpmyadmin.test">
            <i class="fab fa-php"></i> <span>phpMyAdmin</span>
          </a>
        </li>
      </ul>

      <div class="settings color-mode">
        <div class="sidebar-label"><i class="fas fa-cog"></i> Settings</div>
        <div class="mode-switch-container">
          <div class="mode-label">Color Mode</div>
          <div id="mode-switch"></div>
        </div>
        <div class="color-picker-container">
          <div class="color-label">Active Color</div>
          <div class="color-wrap">
            <input type="color" name="active-color" id="color-picker" value="#ba68c8">
          </div>
        </div>
      </div>

    </aside>

  </div>

  <pre id="md-table">
    <?php include('valet_links.html'); ?>
  </pre>

  <script src="assets/js/scripts.js"></script>

</body>
</html>
