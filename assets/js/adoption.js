// assets/js/adoption.js
// Logic dành riêng cho trang adoption.html

document.addEventListener('DOMContentLoaded', () => {
    const applicationListContainer = document.getElementById('application-list-container');
    
    // Nếu không phải trang "Đơn nhận nuôi" thì không làm gì cả
    if (!applicationListContainer) {
        return;
    }

    // Hàm để render danh sách đơn nhận nuôi ra HTML
    function renderAdoptionList(applications) {
        applicationListContainer.innerHTML = ''; // Xóa nội dung cũ

        if (applications.length === 0) {
            applicationListContainer.innerHTML = '<p class="empty-message">Không có đơn nhận nuôi nào.</p>';
            return;
        }

        let htmlContent = '';
        applications.forEach(app => {
            htmlContent += `
                <div class="application-card">
                    <div class="pet-image">
                        <img src="${app.imageUrl}" alt="${app.petName}">
                    </div>
                    <div class="pet-info">
                        <h3>${app.petName}</h3>
                        <p class="adopter-name">${app.adopterName}</p>
                        <div class="details">
                            <p><strong>Địa chỉ:</strong> ${app.address}</p>
                            <p><strong>Nghề nghiệp:</strong> ${app.occupation}</p>
                            <p><strong>Lý do:</strong> ${app.reason}</p>
                            <p><strong>SĐT:</strong> ${app.phone}</p>
                        </div>
                        <div class="actions">
                            <button class="btn btn-approve">Duyệt</button>
                            <button class="btn btn-reject">Không duyệt</button>
                        </div>
                    </div>
                </div>
            `;
        });

        applicationListContainer.innerHTML = htmlContent;
    }

    // --- KHỞI TẠO BAN ĐẦU ---
    // Hiển thị tất cả các đơn nhận nuôi từ data-adoption.js
    renderAdoptionList(adoptionData.applications);
});