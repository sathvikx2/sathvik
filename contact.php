<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Example: Send an email (replace with your email sending code)
    $to = "ksk.sathvik@gmail.com";  // Change this email address to your desired recipient
    $subject = "Contact Form Submission from $name";
    $headers = "From: $email";

    // You can customize the email content based on your requirements
    $emailContent = "Name: $name\n\nEmail: $email\n\nMessage:\n$message";

    // Send the email
    if (mail($to, $subject, $emailContent, $headers)) {
        // Display success message
        echo '<p class="success-message">Form submitted successfully!</p>';
    } else {
        // Display an error message if the email fails to send
        echo '<p class="error-message">Error submitting the form. Please try again later.</p>';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - Smith & Associates Law Firm</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Smith & Associates Law Firm</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#" onclick="loadContent('home')">Home</a></li>
            <li><a href="#" onclick="loadContent('about')">About</a></li>
            <li><a href="#" onclick="loadContent('services')">Services</a></li>
            <li><a href="#" onclick="loadContent('team')">Our Team</a></li>
            <li><a href="#" onclick="loadContent('contact')">Contact</a></li>
        </ul>
    </nav>

    <section id="content">
        <!-- Content will be dynamically loaded here -->
    </section>

    <footer>
        <p>&copy; 2024 Smith & Associates Law Firm. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>


