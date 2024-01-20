document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('aesthetic-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Add logic to handle form submission, e.g., send data to server
        alert('Form submitted!');
    });
});