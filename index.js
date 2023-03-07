
<!DOCTYPE html>

<html>

  <head>

    <meta charset="UTF-8">

    <title>Мой сайт</title>

    <style>

      * {

        margin: 0;

        padding: 0;

        box-sizing: border-box;

      }

      body {

        font-family: Arial, sans-serif;

      }

      /* Стили для бокового меню */

      .sidebar {

        position: fixed; /* фиксированное положение */

        top: 0;

        left: 0;

        height: 100%;

        width: 200px;

        background-color: #333;

        color: #fff;

        padding: 20px;

      }

      .sidebar ul {

        list-style: none;

        margin: 0;

        padding: 0;

      }

      .sidebar li {

        margin-bottom: 10px;

      }

      .sidebar a {

        color: #fff;

        text-decoration: none;

      }

      /* Стили для основного содержимого */

      .content {

        margin-left: 200px; /* ширина бокового меню */

        padding: 20px;

      }

      .content h1 {

        font-size: 36px;

        margin-bottom: 20px;

      }

      .content p {

        font-size: 16px;

        line-height: 1.5;

        margin-bottom: 20px;

      }

    </style>

  </head>

  <body>

    <div class="sidebar">

      <ul>

        <li><a href="#">Главная</a></li>

        <li><a href="#">О нас</a></li>

        <li><a href="#">Контакты</a></li>

      </ul>

    </div>

    <div class="content">

      <h1>Заголовок страницы</h1>

      <p>Текст страницы...</p>

    </div>

  </body>

</html>
