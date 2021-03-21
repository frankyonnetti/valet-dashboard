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
      <div class="valetlinks-wrap">
        <div class="header">
          <div class="col gripcol"></div>
          <div class="col site">Site</div>
          <div class="col ssl">SSL</div>
          <div class="col url"><span><i class="fas fa-home"></i> Hosts /</span> URL</div>
          <div class="col path">Path</div>
        </div>
        <div id="valetSort" class="valetlinks-container"></div>
      </div>
    </div>

    <aside class="sidebar color-mode">

      <div class="logo color-mode">
        <span class="logo-img">
          <svg width="100px" height="100px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>laravel-valet-logo</title>
            <g id="laravel-valet-logo" stroke="none" stroke-width="0" fill="none" fill-rule="evenodd">
              <rect id="Rectangle" fill-opacity="0" fill="#000000" x="0" y="0" width="100" height="100"></rect>
              <path d="M21.2408668,4.15066231 L34.7886172,11.9508395 L34.7914367,11.9508395 C34.8365489,11.9790346 34.8746123,12.0142785 34.9154952,12.0467029 C34.9521489,12.074898 34.9930318,12.1002736 35.0254562,12.1312882 C35.0649293,12.1721712 35.0931244,12.2186931 35.1269586,12.2638053 C35.1509244,12.2976394 35.1833488,12.3272443 35.2030854,12.3638979 C35.2355097,12.4202881 35.2538365,12.4794979 35.2763926,12.5387076 C35.2876707,12.571132 35.3074073,12.6007368 35.3158658,12.634571 C35.3418217,12.7306412 35.3550921,12.8296954 35.3553389,12.9292099 L35.3553389,41.9123734 L46.6446611,35.4119907 L46.6446611,20.5954603 C46.6446611,20.4967774 46.6587586,20.3966848 46.6841342,20.3022312 C46.6940025,20.268397 46.7123293,20.2387922 46.7236074,20.2063678 C46.7461635,20.1471581 46.7659,20.0865386 46.7969146,20.0315581 C46.818061,19.9949045 46.8490756,19.9652996 46.8730414,19.9314655 C46.9068756,19.8863533 46.9350707,19.8398314 46.9745438,19.8003582 C47.0069682,19.7679338 47.0478511,19.743968 47.0845048,19.7157729 C47.1267974,19.6819387 47.1634511,19.6452851 47.2085633,19.6184997 L47.209973,19.6184997 L60.7591332,11.8183225 C61.1081548,11.61715 61.537916,11.61715 61.8869376,11.8183225 L75.434688,19.6184997 C75.4826197,19.6466949 75.5192734,19.6819387 75.561566,19.7143631 C75.5968099,19.7425582 75.6376928,19.7679338 75.6701172,19.7989485 C75.7095904,19.8398314 75.7377855,19.8863533 75.7716196,19.9314655 C75.7969952,19.9652996 75.8280098,19.9949045 75.8477464,20.0315581 C75.8801708,20.0865386 75.8984976,20.1471581 75.9210537,20.2063678 C75.9337415,20.2387922 75.9520683,20.268397 75.9605268,20.3022312 C75.9864827,20.3983014 76,20.4973556 76,20.5968701 L76,36.0647075 C76,36.4688101 75.7838228,36.8420368 75.4332783,37.0430778 L62.4508398,44.5176015 L62.45,52 L60.193,52 L60.1938212,45.8089376 L53.7512386,49.4883995 L35.3539292,59.9882585 L35.3539292,72.9805652 L51,63.972 L51,66.578 L34.7872075,75.9114469 C34.7251782,75.9466908 34.65751,75.9692469 34.5898417,75.9932128 C34.5644661,76.0016713 34.5405003,76.0171786 34.5137149,76.0242274 C34.3242776,76.0741139 34.1251525,76.0741139 33.9357151,76.0242274 C33.9047005,76.0157688 33.8765054,75.9988518 33.8469006,75.9875737 C33.7848713,75.9650177 33.7200226,75.9452811 33.6608128,75.9114469 L6.56672171,60.3110925 C6.21639073,60.1098371 6,59.7367462 6,59.3327222 L6,12.9292099 C6,12.8277075 6.01409756,12.7290246 6.03947315,12.6331612 C6.04793169,12.6007368 6.06766826,12.571132 6.07894631,12.5387076 C6.10009264,12.4794979 6.11982922,12.4188784 6.15084384,12.3638979 C6.17199017,12.3272443 6.20300479,12.2976394 6.22838039,12.2638053 C6.26080477,12.2186931 6.29040963,12.1721712 6.32847303,12.132698 C6.36089741,12.1002736 6.40319008,12.0763078 6.43984372,12.0481127 C6.48072663,12.0142785 6.51738027,11.9776249 6.5639022,11.9508395 L6.56531196,11.9508395 L20.1130624,4.15066231 C20.4621614,3.94977923 20.8917678,3.94977923 21.2408668,4.15066231 Z M8.25842832,14.883131 L8.25842832,58.6800054 L33.0955009,72.9791555 L33.0955009,59.9896682 L20.1201112,52.6462518 L20.1102429,52.6406128 C20.0665405,52.6152372 20.0298868,52.5785835 19.9890039,52.5475689 C19.95376,52.5193738 19.9128771,52.4968177 19.8818625,52.4658031 L19.879043,52.4615738 C19.8423893,52.4263299 19.8170137,52.3826275 19.7859991,52.3431544 C19.757804,52.305091 19.7239699,52.2726666 19.7014138,52.2331934 L19.700004,52.2289642 C19.6746284,52.1866715 19.6591211,52.1359203 19.6407943,52.0879886 C19.6224675,52.0456959 19.5985016,52.0062228 19.5872236,51.9611106 L19.5872236,51.9597009 C19.573126,51.9061301 19.5703065,51.8497399 19.5646675,51.7947595 C19.5590285,51.7524668 19.5477504,51.7101741 19.5477504,51.6678815 L19.5477504,21.3821039 L12.9994361,17.6095981 L8.25842832,14.883131 Z M47.775285,37.3687313 L34.790027,44.8446648 L22.9551295,51.6580132 L34.2233053,58.0357471 L50.7780642,48.5847462 L59.053329,43.8620652 L47.775285,37.3687313 Z M33.0969106,14.8817212 L28.3559028,17.6110079 L21.8061788,21.3821039 L21.8061788,49.7125506 L26.5485963,46.9818542 L33.0969106,43.2121679 L33.0969106,14.8817212 Z M73.7415717,22.5493814 L69.0005639,25.2786681 L62.4508398,29.0497641 L62.4508398,41.9123734 L73.7429814,35.4119907 L73.7415717,35.4119907 L73.7415717,22.5493814 Z M48.9030894,22.5493814 L48.9030894,35.4119907 L55.4514037,39.1816769 L60.1938212,41.9123734 L60.1938212,29.0497641 L53.6440972,25.2786681 L48.9030894,22.5493814 Z M61.3230354,14.0993069 L50.0365328,20.5968701 L61.3230354,27.0944332 L72.6081282,20.5954603 L61.3230354,14.0993069 Z M20.677,6.432 L9.390462,12.9292099 L20.6755548,19.426773 L31.9620574,12.9278001 L20.677,6.432 Z" id="Combined-Shape"></path>
              <rect id="Rectangle" stroke-width="2" x="52" y="53" width="42" height="40" rx="8"></rect>
              <path d="M61,67.6571328 C61,66.0421026 62.0752,65.5177877 63.4,66.4851692 L73,73.5 L82.6,66.4857537 C83.926,65.5172032 85,66.0432716 85,67.6571328 L85,79.3428672 C85,80.9578974 83.9248,81.4822123 82.6,80.5148308 L73,73.4994155 L63.4,80.5136618 C62.074,81.4822123 61,80.9561438 61,79.3422827 L61,67.6571328 Z" id="Path"></path>
            </g>
          </svg>
        </span>
        <a class="server-version" href="https://github.com/laravel/valet/releases">
          <?php include('valet_version.html'); ?>
        </a>
      </div>

      <ul class="menu color-mode">
        <li class="sidebar-label">
          <i class="fas fa-book"></i> Docs
        </li>
        <li class="valet-docs">
          <a href="https://laravel.com/docs/valet">Valet Docs <i class="fas fa-external-link-square-alt"></i></a>
        </li>
        <li class="valet-github">
          <a href="https://github.com/laravel/valet">Valet GitHub <i class="fas fa-external-link-square-alt"></i></a>
        </li>
        <li class="php-info">
          <a href="info.php">PHP info <span>v<?php echo phpversion(); ?></span></a>
        </li>
        <li class="phpmyadmin">
          <a href="https://phpmyadmin.test">phpMyAdmin</a>
          <span>
            <i class="fas fa-info-circle"></i>
            <em>Brew install path: <code>/usr/local/Cellar/phpmyadmin/5.x/share/phpmyadmin</code></em>
          </span>
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
            <input type="color" name="active-color" id="color-picker" value="">
          </div>
        </div>
        <div class="sortable-container">
          <div class="sortable-label">Host List</div>
          <div class="sortable-wrap">
            <button class="clearmodal">Reset</button>
          </div>
        </div>
        <div class="grouping-name-container">
          <div class="grouping-wrap">
            <div class="grouping-label">New Host Header</div>
            <div class="expand-group-field">Add</div>
          </div>
          <div class="grouping-form">
            <input type="text" class="create-group-input" aria-label="Enter a new header" placeholder="Enter Header">
            <button class="create-group-button"><i class="fas fa-plus"></i></button>
            <div class="close-group-button"></div>
          </div>
        </div>
      </div>

    </aside>

  </div>

  <footer class="footer color-mode">
    <p>Valet Dashoard v0.1.1 / <a href="https://github.com/frankyonnetti/valet-dashboard">Github</a></p>
  </footer>

  <pre id="links-table">
    <?php include('valet_links.html'); ?>
  </pre>

  <div class="modal">
    <h3>Reset Host List Sort</h3>
    <p>Resetting the host list removes all headers and reverts the list back to the default sort. This cannot be undone.</p>
    <div class="modal-action">
      <button class="cancel">Cancel</button>
      <button class="clearsort">Reset</button>
    </div>
  </div>
  <div class="modal-bg"></div>

  <script src="assets/contib/SortableJS/Sortable.min.js"></script>
  <script src="assets/js/min/scripts.js"></script>

</body>
</html>
