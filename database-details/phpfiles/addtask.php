<?php
require_once 'dbconfig.php';

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

$data = json_decode(file_get_contents("php://input"));

$stmt = $conn->prepare("INSERT INTO todotable (todousername, task, status) VALUES (?, ?, ?)");
$status = 0; // Default status value
$stmt->bind_param("ssi", $data->username, $data->taskname, $status);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Task added successfully."]);
} else {
    echo json_encode(["success" => false, "message" => "Error: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
