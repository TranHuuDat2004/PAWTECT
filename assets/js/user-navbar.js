// assets/js/user-navbar.js
// Logic dành riêng cho sidebar của User

document.addEventListener('DOMContentLoaded', () => {
    // 1. HTML của sidebar dành cho User
    const sidebarHTML = `
        <nav class="sidebar" id="user-sidebar-nav">
            <div class="sidebar-header">
                <h3>Menu</h3>
                <button class="close-btn" id="close-btn-user">×</button>
            </div>
            <ul>
                <li><a href="#"><i class="fas fa-donate"></i> Ủng hộ quỹ Pawtect</a></li>
                <li><a href="#"><i class="fas fa-bullhorn"></i> Báo cáo cứu hộ</a></li>
                <li><a href="#"><i class="fas fa-paw"></i> Tìm bạn đồng hành</a></li>
                <li><a href="premium.html"><i class="fas fa-crown"></i> Khám phá Premium</a></li>
                <li><a href="vets.html"><i class="fas fa-stethoscope"></i> Kết nối với Thú y</a></li>
                <li><a href="user.html"><i class="fas fa-newspaper"></i> Bài đăng của tôi</a></li>
                <li class="logout-item">
                    <a href="login.html" id="logout-button-user">
                        <i class="fas fa-sign-out-alt"></i> Đăng xuất
                    </a>
                </li>
            </ul>
        </nav>
        <div class="overlay" id="overlay-user"></div>
    `;

    // 2. Chèn HTML vào placeholder
    const placeholder = document.getElementById('user-navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = sidebarHTML;
    }

    // 3. Gắn sự kiện sau khi đã chèn HTML
    const menuIcon = document.getElementById('menu-icon');
    const sidebarNav = document.getElementById('user-sidebar-nav');
    const closeBtn = document.getElementById('close-btn-user');
    const overlay = document.getElementById('overlay-user');
    
    // Mở/đóng sidebar
    if (menuIcon && sidebarNav && closeBtn && overlay) {
        menuIcon.addEventListener('click', () => {
            sidebarNav.classList.add('active');
            overlay.classList.add('active');
        });

        const closeSidebar = () => {
            sidebarNav.classList.remove('active');
            overlay.classList.remove('active');
        };

        closeBtn.addEventListener('click', closeSidebar);
        overlay.addEventListener('click', closeSidebar);
    }
    
    // Hàm đặt trạng thái 'active' cho mục sidebar
    function setActiveSidebarItem() {
        const currentPageUrl = window.location.href;
        const sidebarLinks = document.querySelectorAll('#user-sidebar-nav ul li a');

        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');
            if (currentPageUrl.endsWith(linkHref)) {
                link.classList.add('active');
            }
        });
    }

    setActiveSidebarItem();
});