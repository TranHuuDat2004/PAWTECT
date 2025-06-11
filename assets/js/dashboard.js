// assets/js/dashboard.js
// Logic dành riêng cho trang dashboard.html

document.addEventListener('DOMContentLoaded', () => {

    // =============================================================
    // PHẦN 1: LOGIC CHO CỘT BÊN TRÁI (BỘ LỌC) - GIỮ NGUYÊN
    // =============================================================
    const specificFilterContainer = document.getElementById('specific-filter-container');
    if (specificFilterContainer) {
        const timeFilterButtons = document.querySelectorAll('.time-filters button');

        function generateWeekFilters() { return `<button><span>T1</span> Tuần 1</button><button><span>T1</span> Tuần 2</button><button class="active"><span>T1</span> Tuần 3</button><button><span>T1</span> Tuần 4</button><button><span>T2</span> Tuần 1</button><button><span>T2</span> Tuần 2</button>`; }
        function generateMonthFilters() { let h = ''; for (let i = 1; i <= 12; i++) { h += `<button>Tháng ${i}</button>`; } return h; }
        function generateYearFilters() { let h = ''; for (let i = 2020; i <= 2025; i++) { h += `<button>${i}</button>`; } return h; }

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

        function initializeFilters() {
            specificFilterContainer.innerHTML = generateWeekFilters();
            setupSpecificFilterClicks();
        }
        initializeFilters();
    }


    // =============================================================
    // PHẦN 2: LOGIC CHO CỘT BÊN PHẢI (DANH SÁCH CASE) - ĐÃ SỬA
    // =============================================================
    const caseListContainer = document.getElementById('case-list-container');
    if (caseListContainer) {

        function renderCaseList(posts) {
            caseListContainer.innerHTML = ''; 
            if (!posts || posts.length === 0) {
                caseListContainer.innerHTML = '<p class="empty-message">Không có bài đăng nào.</p>';
                return;
            }

            const statusMap = {
                pending: { text: 'Chờ duyệt', className: 'status-pending' },
                unhandled: { text: 'Chưa tiếp nhận', className: 'status-unhandled' },
                handled: { text: 'Đã tiếp nhận', className: 'status-handled' }
            };

            let htmlContent = '';
            posts.forEach(post => {
                const statusInfo = statusMap[post.status] || { text: 'Không rõ', className: 'status-unknown' };
                htmlContent += `
                    <div class="case-card">
                        <div class="card-header">
                            <h3>${post.id}</h3>
                            <i class="fas fa-ellipsis-v"></i>
                        </div>
                        <div class="card-body">
                            <p class="update-time">${post.updateTime}</p>
                            <p><strong>Địa chỉ:</strong> ${post.address}</p>
                            <p><strong>Miêu tả:</strong> ${post.description}</p>
                            <p>
                                <strong>Trạng thái:</strong> 
                                <span class="status-tag ${statusInfo.className}">${statusInfo.text}</span>
                            </p>
                        </div>
                    </div>
                `;
            });

            caseListContainer.innerHTML = htmlContent;
        }

        // --- KHỞI TẠO BAN ĐẦU (PHẦN BỊ THIẾU) ---
        // Đoạn code này sẽ được thực thi khi trang được tải
        if (typeof appData !== 'undefined' && appData.posts) {
            // Lấy toàn bộ bài đăng từ data.js và gọi hàm render
            renderCaseList(appData.posts);
        } else {
            // Ghi lỗi ra console nếu không tìm thấy dữ liệu
            console.error('Không tìm thấy dữ liệu appData. Vui lòng kiểm tra file data.js đã được nhúng đúng cách chưa.');
            caseListContainer.innerHTML = '<p class="empty-message">Lỗi: Không thể tải dữ liệu bài đăng.</p>';
        }
    }
});