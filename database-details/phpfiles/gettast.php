<?php
require_once 'dbconfig.php';

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Connection failed: " . $conn->connect_error]));
}

$data = json_decode(file_get_contents("php://input"));
$username = $data->username;

$sql = "SELECT id, task AS taskname, status FROM todotable WHERE todousername = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

$tasks = [];
while ($row = $result->fetch_assoc()) {
    $tasks[] = $row;
}

echo json_encode(["tasks" => $tasks]);

$stmt->close();
$conn->close();
?>
