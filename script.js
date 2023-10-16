document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registration-form');
    
    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting to the server
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }
        
        // You can add more validation logic here (e.g., check email format)
        
        // If validation passes, you can send the data to your server here or perform further actions
        
        alert('Registration successful!'); // Replace this with your logic
        registrationForm.reset(); // Clear the form
    });
});
