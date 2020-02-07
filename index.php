<!DOCTYPE html>
<?php
      $env = getenv('API_URL');
    ?>
<html>
  <head>
    <meta charset="utf-8">
    <title>Cloud</title>
    <link rel="stylesheet" href="bootstrap.min.css">
  </head>
  <body onload="init('<?php echo $env ?>')">
    <div id="user_container" class="table"></div>

    <script src="service.js"></script>
  </body>
</html>
