document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Perform login authentication here
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check username and password
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect to the admin dashboard or desired page
    } else {
        alert('Invalid username or password. Please try again.');
    }
});