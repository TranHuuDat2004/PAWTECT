document.addEventListener('DOMContentLoaded', function () {
    // =============================================================
    // PHẦN 1: KIỂM TRA XÁC THỰC ADMIN
    // =============================================================
    /*const username = localStorage.getItem('username');
    const isAdmin = localStorage.getItem('isAdmin');

    if (!username || isAdmin !== 'true') {
        alert('Bạn không có quyền truy cập trang này');
        window.location.href = '../login.html';
        return;
    }

    // Update username display
    const usernameElement = document.querySelector('.username');
    if (usernameElement) {
        usernameElement.textContent = username;
    } */

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

    // Gọi hàm khi trang tải xong
    setActiveSidebarItem();

    // =============================================================
    // PHẦN 3: LOGIC CHO DASHBOARD
    // =============================================================
    // Time filter buttons
    const timeFilters = document.querySelectorAll('.time-filters button');
    timeFilters.forEach(button => {
        button.addEventListener('click', function () {
            timeFilters.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            updateStats(this.textContent);
        });
    });

    // Case card actions
    const caseCards = document.querySelectorAll('.case-card');
    caseCards.forEach(card => {
        const menuButton = card.querySelector('.fa-ellipsis-v');
        if (menuButton) {
            menuButton.addEventListener('click', function (e) {
                e.stopPropagation();
                console.log('Case menu clicked:', card.querySelector('h3').textContent);
            });
        }

        card.addEventListener('click', function () {
            console.log('Case clicked:', this.querySelector('h3').textContent);
        });
    });

    // Update stats based on time filter
    function updateStats(timeFilter) {
        console.log('Updating stats for:', timeFilter);

        const stats = {
            'Theo tuần': { total: 20, pending: 6, received: 14 },
            'Theo tháng': { total: 85, pending: 25, received: 60 },
            'Theo năm': { total: 1024, pending: 156, received: 868 }
        };

        const data = stats[timeFilter];
        if (data) {
            const donutChart = document.querySelector('.donut-chart');
            if (donutChart) {
                const pendingPercentage = (data.pending / data.total) * 100;
                donutChart.style.background = `conic-gradient(
                    #e74c3c 0% ${pendingPercentage}%,
                    #2ecc71 ${pendingPercentage}% 100%
                )`;
            }

            const totalCount = document.querySelector('.chart-center strong');
            if (totalCount) {
                totalCount.textContent = data.total;
            }
        }
    }

    // Initialize with default stats
    updateStats('Theo tuần');

    // =============================================================
    // PHẦN 4: LOGIC CHO FILTERS
    // =============================================================
    const specificFilterContainer = document.getElementById('specific-filter-container');
    if (specificFilterContainer) {
        const timeFilterButtons = document.querySelectorAll('.time-filters button');

        function generateWeekFilters() {
            return `<button><span>T1</span> Tuần 1</button>
                    <button><span>T1</span> Tuần 2</button>
                    <button class="active"><span>T1</span> Tuần 3</button>
                    <button><span>T1</span> Tuần 4</button>
                    <button><span>T2</span> Tuần 1</button>
                    <button><span>T2</span> Tuần 2</button>`;
        }

        function generateMonthFilters() {
            let html = '';
            for (let i = 1; i <= 12; i++) {
                html += `<button>Tháng ${i}</button>`;
            }
            return html;
        }

        function generateYearFilters() {
            let html = '';
            for (let i = 2020; i <= 2025; i++) {
                html += `<button>${i}</button>`;
            }
            return html;
        }

        function setupSpecificFilterClicks() {
            const specificButtons = specificFilterContainer.querySelectorAll('button');
            specificButtons.forEach(button => {
                button.addEventListener('click', () => {
                    specificButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                });
            });
        }

        timeFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                timeFilterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const filterType = button.textContent.trim();
                let newFiltersHTML = '';
                switch (filterType) {
                    case 'Theo tháng': newFiltersHTML = generateMonthFilters(); break;
                    case 'Theo năm': newFiltersHTML = generateYearFilters(); break;
                    default: newFiltersHTML = generateWeekFilters(); break;
                }
                specificFilterContainer.innerHTML = newFiltersHTML;
                setupSpecificFilterClicks();
            });
        });

        // Initialize filters
        specificFilterContainer.innerHTML = generateWeekFilters();
        setupSpecificFilterClicks();
    }

    // =============================================================
    // PHẦN 5: LOGOUT FUNCTIONALITY
    // =============================================================
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.removeItem('username');
            localStorage.removeItem('isAdmin');
            window.location.href = '../login.html';
        });
    }
});