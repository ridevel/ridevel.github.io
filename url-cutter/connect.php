<?php

$conn = mysqli_connect('localhost', 'root', '', 'url_cutter');

if (!$conn) die("Ошибка  подключения к БД: \n" . mysqli_connect_error());