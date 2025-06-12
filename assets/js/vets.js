// assets/js/vets.js
// Logic cho trang Kết nối với Thú Y (Đã được cập nhật để đọc dữ liệu động)

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('vet-slider');
    const paginationContainer = document.getElementById('slider-pagination');

    if (!slider || !paginationContainer) {
        return;
    }

    // Hàm tạo HTML cho các ngôi sao đánh giá
    function createStarsHTML(rating) {
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                starsHTML += '<i class="fas fa-star"></i>'; // Sao vàng
            } else {
                starsHTML += '<i class="far fa-star"></i>'; // Sao rỗng
            }
        }
        return starsHTML;
    }

    // Hàm để render danh sách phòng khám ra HTML
    function renderVetList(clinics) {
        slider.innerHTML = ''; // Xóa nội dung cũ

        if (!clinics || clinics.length === 0) {
            slider.innerHTML = '<p class="empty-message">Không có phòng khám nào.</p>';
            return;
        }

        let htmlContent = '';
        clinics.forEach(clinic => {
            htmlContent += `
                <div class="vet-clinic-card">
                    <div class="clinic-logo">
                        <img src="${clinic.logoUrl}" alt="${clinic.name} Logo">
                    </div>
                    <div class="clinic-info">
                        <h3>${clinic.name}</h3>
                        <p>Địa chỉ: ${clinic.address}</p>
                        <p>Hotline: ${clinic.hotline}</p>
                        <p>${clinic.workingHours}</p>
                    </div>
                    <button class="btn-schedule">Hẹn lịch ngay</button>
                    <div class="clinic-rating">
                        <h4>Đánh giá chung</h4>
                        <div class="stars">
                            ${createStarsHTML(clinic.rating)}
                        </div>
                    </div>
                </div>
            `;
        });
        slider.innerHTML = htmlContent;
    }

    // Hàm khởi tạo slider và pagination
    function initializeSlider() {
        // Render danh sách phòng khám trước
        renderVetList(vetData.clinics);

        // Sau khi render xong, mới tìm các element đã được tạo ra
        const cards = slider.querySelectorAll('.vet-clinic-card');
        const cardCount = cards.length;
        paginationContainer.innerHTML = ''; // Xóa các dấu chấm cũ

        if (cardCount <= 1) return; // Không cần pagination nếu chỉ có 1 card

        // Tạo các dấu chấm điều hướng
        for (let i = 0; i < cardCount; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            paginationContainer.appendChild(dot);
        }
        const dots = paginationContainer.querySelectorAll('.dot');

        // Cập nhật dấu chấm active khi người dùng cuộn slider
        slider.addEventListener('scroll', () => {
            const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight); // card width + gap
            const scrollLeft = slider.scrollLeft;
            const activeIndex = Math.round(scrollLeft / cardWidth);

            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === activeIndex);
            });
        });
    }

    // --- KHỞI TẠO BAN ĐẦU ---
    if (typeof vetData !== 'undefined' && vetData.clinics) {
        initializeSlider();
    } else {
        console.error("Không tìm thấy dữ liệu vetData. Hãy chắc chắn file data-vets.js đã được nhúng.");
    }
});