document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('aesthetic-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Add logic to handle form submission, e.g., send data to server
        alert('Form submitted!');
    });
});

function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

   
    var validUsername = "Admin";
    var validPassword = "Ad12345..";

    if (username === validUsername && password === validPassword) {
        document.getElementById("error-message").innerText = "Login successful!";
    } else {
        document.getElementById("error-message").innerText = "Invalid credentials. Please try again.";
    }
}