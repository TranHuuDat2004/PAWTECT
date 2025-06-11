/* document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;

        // Admin authentication
        if (email === 'admin@gmail.com' && password === 'admin') {
            // Store admin status
            localStorage.setItem('username', 'admin');
            localStorage.setItem('isAdmin', 'true');
            // Redirect to admin dashboard
            window.location.href = 'admin/dashboard.html';
            return;
        }

        // Regular user authentication
        if (email === 'user@gmail.com' && password === 'user') {
            // Successful login
            errorMessage.style.display = 'none';
            window.location.href = 'landing-page.html';
        } else {
            // Failed login
            errorMessage.textContent = 'Email hoặc mật khẩu không đúng!';
            errorMessage.style.display = 'block';
        }
    });

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }
});  */