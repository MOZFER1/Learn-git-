// Registration form handler
if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const pass = document.getElementById('password').value;
        const confirm = document.getElementById('confirmPassword').value;
        if (pass !== confirm) {
            alert('Passwords do not match!');
            return;
        }
        if (!document.getElementById('terms').checked) {
            alert('You must agree to the terms.');
            return;
        }
        // Add your AJAX registration logic here
        alert('Registration submitted!');
    });
}
// Login form handler
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your AJAX login logic here
        alert('Login submitted!');
    });
} 