<?php
require_once 'dbconfig.php';

// Check connection
if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Connection failed: ' . $conn->connect_error]));
}

// Get POST data
$data = json_decode(file_get_contents("php://input"));

if (isset($data->username) && isset($data->password)) {
    $username = $conn->real_escape_string($data->username);
    $password = $data->password; // Don't hash here for login check

    // Check if user exists
    $sql = "SELECT * FROM logindetails WHERE name='$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            $_SESSION['username'] = $username; // Store username in session

            // Include email and phone number in the response
            echo json_encode([
                'success' => true,
                'username' => $username,
                'email' => $row['email'], // Assuming 'email' is the correct column name
                'phoneNumber' => $row['mobile'], // Assuming 'mobile' is the correct column name
                'message' => 'Login successful.'
            ]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Invalid password.']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'User not found.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid input.']);
}

// Close connection
$conn->close();
?>
