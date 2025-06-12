// assets/js/login.js
// Logic xác thực cho trang login.html

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessageDiv = document.getElementById('error-message');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            // 1. Ngăn chặn form gửi đi theo cách truyền thống
            event.preventDefault();

            // Ẩn thông báo lỗi cũ (nếu có)
            errorMessageDiv.style.display = 'none';

            // 2. Lấy thông tin người dùng nhập vào
            const email = loginForm.email.value;
            const password = loginForm.password.value;

            // 3. Tìm kiếm người dùng trong "database" (data-account.js)
            const user = accountData.users.find(u => u.email === email);

            // 4. Bắt đầu quá trình xác thực
            if (!user) {
                // Trường hợp 1: Không tìm thấy email
                displayError('Tài khoản không tồn tại.');
            } else if (user.password !== password) {
                // Trường hợp 2: Sai mật khẩu
                displayError('Mật khẩu không chính xác.');
            } else {
                // Trường hợp 3: Đăng nhập thành công!
                handleSuccessfulLogin(user);
            }
        });
    }

    // Hàm xử lý khi đăng nhập thành công
    function handleSuccessfulLogin(user) {
        // 5. Kiểm tra quyền hạn (role) của người dùng
        if (user.role === 'admin') {
            // Nếu là admin, chuyển hướng đến trang dashboard
            // alert('Đăng nhập quản trị viên thành công!');
            window.location.href = '/admin/dashboard.html'; // Chuyển hướng
        } else {
            // Nếu là user thường, thông báo không có quyền
            displayError('Bạn không có quyền truy cập trang quản trị.');
        }
    }

    // Hàm hiển thị thông báo lỗi
    function displayError(message) {
        errorMessageDiv.textContent = message;
        errorMessageDiv.style.display = 'block';
    }
});