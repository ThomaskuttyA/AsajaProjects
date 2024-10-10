<?php
// Enable CORS
require_once 'dbconfig.php';
// Get task ID from query parameter
$data = json_decode(file_get_contents("php://input"));
$taskId = $data->id;

// Prepare and execute deletion
$stmt = $conn->prepare("DELETE FROM todotable WHERE id = ?");
$stmt->bind_param("i", $taskId);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Task deleted successfully."]);
} else {
    echo json_encode(["success" => false, "message" => "Error deleting task: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
