<?php
require_once 'dbconfig.php';

// Check connection
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

// Get the POST data
$data = json_decode(file_get_contents("php://input"));

// Prepare and bind
$stmt = $conn->prepare("UPDATE todotable SET status = ? WHERE id = ?");
if (!$stmt) {
    die(json_encode(["success" => false, "message" => "Prepare failed: " . $conn->error]));
}

$stmt->bind_param("ii", $data->status, $data->id);

// Execute the statement
if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Status updated successfully."]);
} else {
    echo json_encode(["success" => false, "message" => "Error: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
