<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

function dbConnect()
{

// Database connection
    $servername = "localhost";
    $username = "root"; // Default XAMPP username
    $password = ""; // Default XAMPP password
    $dbname = "thomas"; // Replace with your database name

    $con = new mysqli($servername, $username, $password, $dbname);

// Check connection
    if ($con->connect_error) {
        die(json_encode(["success" => false, "message" => "Connection failed: " . $con->connect_error]));
    }

    return $con;

}

$conn = dbConnect();
