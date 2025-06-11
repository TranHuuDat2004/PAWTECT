document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;

        // Basic validation
        if (!username || !email || !password) {
            showError('Vui lòng điền đầy đủ thông tin');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('Email không hợp lệ');
            return;
        }

        // Password validation (minimum 6 characters)
        if (password.length < 6) {
            showError('Mật khẩu phải có ít nhất 6 ký tự');
            return;
        }

        // Here you would typically make an API call to your backend
        console.log('Registration attempt:', { username, email, password });
        
        // For demonstration, you can redirect to login page if needed
        // window.location.href = 'login.html';
    });

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }
}); 