// assets/js/donation.js
// Logic dành riêng cho trang donations.html (Trang quản lý của Admin)

document.addEventListener('DOMContentLoaded', () => {
    const transactionListContainer = document.getElementById('transaction-list-container');
    
    // Nếu không phải trang Quản lý thu chi thì không làm gì
    if (!transactionListContainer) {
        return;
    }

    const filterButtons = document.querySelectorAll('.top-filters button');
    const pageTitle = document.getElementById('page-title');

    // Hàm để render danh sách giao dịch ra HTML
    function renderTransactionList(transactions) {
        transactionListContainer.innerHTML = ''; // Xóa nội dung cũ

        if (!transactions || transactions.length === 0) {
            transactionListContainer.innerHTML = '<p class="empty-message">Không có giao dịch nào.</p>';
            return;
        }

        let htmlContent = '';
        transactions.forEach(trans => {
            htmlContent += `
                <div class="transaction-card">
                    <div class="info">
                        <h3>${trans.title}</h3>
                        <p>${trans.timestamp}</p>
                        <p>Người gửi: ${trans.sender}</p>
                    </div>
                    <div class="amount">${trans.amount}</div>
                </div>
            `;
        });
        transactionListContainer.innerHTML = htmlContent;
    }

    // Hàm xử lý khi click vào các nút filter
    function handleFilterClick(event) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        const clickedButton = event.currentTarget;
        clickedButton.classList.add('active');

        const type = clickedButton.dataset.type;
        const title = clickedButton.textContent;
        
        pageTitle.textContent = title;
        
        // Lọc dữ liệu từ biến toàn cục donationData (trong data-donation.js)
        const filteredTransactions = donationData.transactions.filter(t => t.type === type);
        
        renderTransactionList(filteredTransactions);
    }

    // Gắn sự kiện click cho các nút filter
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });

    // --- KHỞI TẠO BAN ĐẦU ---
    // Hiển thị các giao dịch "Quỹ đóng góp" khi tải trang
    if (typeof donationData !== 'undefined' && donationData.transactions) {
        const initialTransactions = donationData.transactions.filter(t => t.type === 'donation');
        renderTransactionList(initialTransactions);
    } else {
        console.error("Không tìm thấy dữ liệu donationData. Hãy chắc chắn file data-donation.js đã được nhúng.");
    }
});