document.addEventListener('DOMContentLoaded', () => {

    // =============================================================
    // PHẦN 2: LOGIC CHO SIDEBAR (CHẠY TRÊN MỌI TRANG)
    // =============================================================
    const menuIcon = document.getElementById('menu-icon');
    const sidebarNav = document.getElementById('sidebar-nav');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');

    // Mở/đóng sidebar khi click
    if (menuIcon && sidebarNav && closeBtn && overlay) {
        menuIcon.addEventListener('click', () => {
            sidebarNav.classList.add('active');
            overlay.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            sidebarNav.classList.remove('active');
            overlay.classList.remove('active');
        });

        overlay.addEventListener('click', () => {
            sidebarNav.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    // =========================================================================
    // HÀM ĐẶT TRẠNG THÁI 'ACTIVE' CHO SIDEBAR (ĐÃ CẬP NHẬT)
    // =========================================================================
    function setActiveSidebarItem() {
        // Lấy URL đầy đủ của trang hiện tại, ví dụ: "http://.../dashboard.html"
        const currentPageUrl = window.location.href;
        const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

        sidebarLinks.forEach(link => {
            link.classList.remove('active'); // Luôn xóa active khỏi tất cả các link trước

            const linkHref = link.getAttribute('href');

            // So sánh xem URL của trang hiện tại có *kết thúc bằng* href của link không.
            // Cách này hoạt động chính xác cho các file .html
            if (currentPageUrl.endsWith(linkHref)) {
                link.classList.add('active');
            }
        });
    }
    // GỌI HÀM KHI TRANG TẢI XONG
    setActiveSidebarItem();


});