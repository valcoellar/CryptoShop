<?php
/* Database connection start */
$servername = "localhost";
$username = "u144733_emp";
$password = "Contraseña_emp_2022";
$dbname = "u144733_emp";
$conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
?>
