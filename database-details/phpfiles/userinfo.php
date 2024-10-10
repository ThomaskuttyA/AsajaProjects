<?php
require_once 'dbconfig.php';

// Get POST data
$data = json_decode(file_get_contents("php://input"));
$username = $data->username ?? '';

if ($username) {
    // Prepare and execute the query
    $stmt = $conn->prepare("SELECT email, mobile FROM logindetails WHERE name = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo json_encode([
            'success' => true,
            'email' => $row['email'],
            'phoneNumber' => $row['mobile']
        ]);
    } else {
        echo json_encode(['success' => false, 'message' => 'User not found.']);
    }

    $stmt->close();
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid input.']);
}

$conn->close();
?>
<?php
