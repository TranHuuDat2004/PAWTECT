document.addEventListener('DOMContentLoaded', () => {

    // ================================================
    // LOGIC CHUNG CHO SIDEBAR
    // ================================================
    const menuIcon = document.getElementById('menu-icon');
    const sidebarNav = document.getElementById('sidebar-nav');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');

    if (menuIcon && sidebarNav && closeBtn && overlay) {
        menuIcon.addEventListener('click', () => sidebarNav.classList.add('active') || overlay.classList.add('active'));
        closeBtn.addEventListener('click', () => sidebarNav.classList.remove('active') || overlay.classList.remove('active'));
        overlay.addEventListener('click', () => sidebarNav.classList.remove('active') || overlay.classList.remove('active'));
    }

    // ================================================
    // LOGIC MỚI CHO TRANG ỦNG HỘ (CHỌN NHIỀU MỤC)
    // ================================================
    const donationPackages = document.querySelectorAll('.donation-package');
    const donationMessage = document.getElementById('donation-message');
    const checkoutButton = document.getElementById('checkout-button');
    
    // Chỉ thực thi logic này nếu các phần tử cần thiết tồn tại
    if (donationPackages.length > 0 && donationMessage && checkoutButton) {
        
        let totalAmount = 0;
        const defaultMessage = "Bạn chưa chọn gói ủng hộ nào, hãy ủng hộ ngay!";

        // Hàm trợ giúp: Chuyển chuỗi "50.000VND" thành số 50000
        function parseAmount(amountString) {
            if (!amountString) return 0;
            const numberString = amountString.replace(/\./g, '').replace('VND', '');
            return parseInt(numberString, 10) || 0;
        }

        // Hàm trợ giúp: Chuyển số 150000 thành chuỗi "150.000VND"
        function formatAmount(amountNumber) {
            return amountNumber.toLocaleString('vi-VN') + 'VND';
        }
        
        // Hàm cập nhật giao diện hộp thông tin ủng hộ
        function updateDonationBox() {
            if (totalAmount === 0) {
                donationMessage.innerHTML = defaultMessage;
                checkoutButton.disabled = true;
            } else {
                donationMessage.innerHTML = `Tổng cộng: <strong>${formatAmount(totalAmount)}</strong>`;
                checkoutButton.disabled = false;
            }
        }
        
        // Gán sự kiện click cho mỗi gói ủng hộ
        donationPackages.forEach(pkg => {
            pkg.addEventListener('click', () => {
                // Lấy giá trị của gói và chuyển thành số
                const packageValue = parseAmount(pkg.dataset.amount);

                // Bật/tắt trạng thái 'selected'
                pkg.classList.toggle('selected');

                // Nếu gói vừa được chọn (thêm vào)
                if (pkg.classList.contains('selected')) {
                    totalAmount += packageValue;
                } else { // Nếu gói vừa được bỏ chọn (trừ đi)
                    totalAmount -= packageValue;
                }
                
                // Cập nhật lại giao diện
                updateDonationBox();
            });
        });

        // Xử lý sự kiện khi nhấn nút Thanh toán
        checkoutButton.addEventListener('click', () => {
            if (totalAmount > 0) {
                alert(`Cảm ơn bạn đã ủng hộ tổng cộng ${formatAmount(totalAmount)}!\nChức năng thanh toán đang được phát triển.`);
            }
        });
        
        // Khởi tạo giao diện lần đầu
        updateDonationBox();
    }
    
    console.log('Trang ủng hộ Pawtect đã tải xong với logic mới!');
});