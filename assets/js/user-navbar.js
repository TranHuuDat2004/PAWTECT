document.addEventListener('DOMContentLoaded', () => {

    const menuIcon = document.getElementById('menu-icon');
    const sidebarNav = document.getElementById('sidebar-nav');
    const overlay = document.getElementById('overlay');
    // THAY ĐỔI Ở ĐÂY: Lấy phần tử nút đóng
    const closeBtn = document.getElementById('close-btn');

    // Kiểm tra tất cả các phần tử có tồn tại không
    if (menuIcon && sidebarNav && overlay && closeBtn) {

        // Sự kiện mở sidebar
        menuIcon.addEventListener('click', () => {
            sidebarNav.classList.add('active');
            overlay.classList.add('active');
        });

        // Hàm chung để đóng sidebar
        const closeSidebar = () => {
            sidebarNav.classList.remove('active');
            overlay.classList.remove('active');
        };

        // THAY ĐỔI Ở ĐÂY: Gán sự kiện cho nút đóng và lớp phủ
        closeBtn.addEventListener('click', closeSidebar);
        overlay.addEventListener('click', closeSidebar);
    }

});