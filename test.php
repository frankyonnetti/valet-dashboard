<!DOCTYPE html>
<html lang="en">
<head>
  <title>Untitled</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">

  <!-- favicon -->
  <link rel="shortcut icon" type="image/x-icon" href="https://yonnetti.net/assets-other/favicon/favicon.ico">
  <link rel="apple-touch-icon" href="https://yonnetti.net/assets-other/favicon/apple-touch-icon-precomposed.png">

  <!-- https://github.com/sindresorhus/modern-normalize/releases -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/0.7.0/modern-normalize.min.css">

  <!-- inline style -->
  <style>
    body {
      text-align: center;
      background: #fff;
      margin: 0;
    }
    img {
      vertical-align: bottom; /* removes bottom gap */
    }
  </style>

  <pre>
    <?php include('valet_links.txt'); ?>
  </pre>

  <div id="new-container"></div>

</head>
<body>


<!-- javascripts -->
<script>
function ready () {
  const str = document.querySelector('pre')
  const newContainer = document.getElementById('new-container')
  // const newStr = str.innerHTML.match(/http(.*).test/g)

  // function createListItem (name) {
  //   const anchor = document.createElement('a')
  //   anchor.setAttribute('href', name)
  //   anchor.textContent = name
  //   return anchor
  // }

  // newStr.forEach((el) => {
  //   // newContainer.appendChild(createListItem(el))
  //   console.log(createListItem(el))
  // })

  const newerStr = str.innerHTML.replace(/http(.*).test/g, function (match) {
    return '<a href="' + match + '">' + match + '</a>'
  })
  console.log(newerStr)
  newContainer.innerHTML = newerStr
}
document.addEventListener('DOMContentLoaded', ready)
</script>

</body>
</html>
