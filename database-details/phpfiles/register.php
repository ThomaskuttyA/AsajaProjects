<?php

require_once 'dbconfig.php';;

// Check connection
if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Connection failed: ' . $conn->connect_error]));
}

// Get POST data
$data = json_decode(file_get_contents("php://input"));

if (isset($data->username) && isset($data->password)) {
    $username = $conn->real_escape_string($data->username);
    $password = password_hash($data->password, PASSWORD_DEFAULT);
    $email =   $data->email;
    $mobile=$data->mobile;

    // Check if the username already exists
    $checkSql = "SELECT * FROM logindetails WHERE name = '$username'";
    $result = $conn->query($checkSql);

    if ($result->num_rows > 0) {
        echo json_encode(['success' => false, 'message' => 'The entered details already exist']);
    } else {
        // Insert the user into the database
        $sql = "INSERT INTO logindetails (name, password,email,mobile) VALUES ('$username', '$password','$email','$mobile')";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(['success' => true, 'message' => 'User registered successfully.']);
        } else {
            // Insertion failed
            echo json_encode(['success' => false, 'message' => 'Insertion failed: ' . $conn->error]);
        }
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid input.']);
}

// Close connection
$conn->close();
?>
