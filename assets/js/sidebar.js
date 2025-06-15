// assets/js/navbar.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. HTML sidebar đơn giản THEO Ý BẠN CỦA BẠN
    const sidebarHTML = `
        <nav class="sidebar simple-sidebar" id="sidebar-nav">
            <div class="sidebar-header">
                <h3>Menu</h3>
                <button class="close-btn" id="close-btn">×</button>
            </div>
            <ul>
                <li><a href="pending.html">Bài đăng chờ duyệt</a></li>
                <li><a href="adoption.html">Đơn nhận nuôi</a></li>
                <li><a href="dashboard.html">Số liệu thống kê</a></li>
                <li><a href="donations.html">Quản lý thu chi</a></li>
                <li class="logout-item">
                    <a href="login.html" id="logout-button">Đăng xuất</a>
                </li>
            </ul>
        </nav>
        <div class="overlay" id="overlay"></div>
    `;

    // 2. CHÈN HTML VÀO TRANG (GIỮ NGUYÊN)
    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = sidebarHTML;
    } else {
        document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
    }

    // 3. GẮN CÁC SỰ KIỆN (ĐÃ THÊM LOGIC ĐĂNG XUẤT)
    const menuIcon = document.getElementById('menu-icon');
    const sidebarNav = document.getElementById('sidebar-nav');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');
    const logoutButton = document.getElementById('logout-button'); // Tìm nút đăng xuất

    // Mở/đóng sidebar
    if (menuIcon && sidebarNav && closeBtn && overlay) {
        menuIcon.addEventListener('click', () => sidebarNav.classList.add('active'));
        closeBtn.addEventListener('click', () => sidebarNav.classList.remove('active'));
        overlay.addEventListener('click', () => sidebarNav.classList.remove('active'));
    }

    // Xử lý sự kiện click cho nút đăng xuất
    if (logoutButton) {
        logoutButton.addEventListener('click', (event) => {
            event.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>
            if (confirm('Bạn có chắc chắn muốn đăng xuất không?')) {
                // Chuyển hướng người dùng đến trang đăng nhập
                // Giả sử trang đăng nhập của bạn là 'login.html'
                window.location.href = '../login.html';
            }
        });
    }

    // Hàm đặt trạng thái 'active' (giữ nguyên)
    function setActiveSidebarItem() {
        const currentPageUrl = window.location.href;
        const sidebarLinks = document.querySelectorAll('.sidebar ul li:not(.logout-item) a'); // Không áp dụng cho nút logout

        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');
            if (currentPageUrl.endsWith(linkHref)) {
                link.classList.add('active');
            }
        });
    }

    // Gọi hàm khi trang tải xong
    setActiveSidebarItem();
});