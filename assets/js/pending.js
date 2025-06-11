// assets/js/pending.js
// Logic dành riêng cho trang pending.html

document.addEventListener('DOMContentLoaded', () => {
    // Chỉ chạy code nếu chúng ta đang ở đúng trang (tìm thấy #approval-list-container)
    const approvalListContainer = document.getElementById('approval-list-container');
    if (!approvalListContainer) {
        // Nếu không tìm thấy container, thoát khỏi hàm, không làm gì cả
        return;
    }

    const filterButtons = document.querySelectorAll('.top-filters button');
    const pageTitle = document.getElementById('page-title');

    // Hàm để render danh sách bài đăng ra HTML
    function renderApprovalList(postsToRender) {
        // Xóa nội dung cũ
        approvalListContainer.innerHTML = '';

        if (postsToRender.length === 0) {
            approvalListContainer.innerHTML = '<p class="empty-message">Không có bài đăng nào.</p>';
            return;
        }

        let htmlContent = '';
        postsToRender.forEach(post => {
            const actionButtons = post.status !== 'handled' 
                ? `<div class="actions">
                       <button class="btn btn-approve">Duyệt</button>
                       <button class="btn btn-reject">Không duyệt</button>
                   </div>`
                : '';

            htmlContent += `
                <div class="approval-card">
                    <div class="post-thumbnail">
                        <img src="${post.imageUrl}" alt="Ảnh bài đăng">
                    </div>
                    <div class="post-details">
                        <h3>${post.id}</h3>
                        <p class="update-time">${post.updateTime}</p>
                        <p><strong>Địa chỉ:</strong> ${post.address}</p>
                        <p><strong>Miêu tả:</strong> ${post.description}</p>
                    </div>
                    ${actionButtons}
                </div>
            `;
        });

        approvalListContainer.innerHTML = htmlContent;
    }

    // Hàm xử lý khi click vào các nút filter
    function handleFilterClick(event) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        const clickedButton = event.currentTarget;
        clickedButton.classList.add('active');

        const status = clickedButton.dataset.status;
        const title = clickedButton.textContent;
        
        pageTitle.textContent = `Bài đăng ${title.toLowerCase()}`;
        
        // Lọc dữ liệu từ biến toàn cục appData (trong data.js)
        const filteredPosts = appData.posts.filter(post => post.status === status);
        
        renderApprovalList(filteredPosts);
    }

    // Gắn sự kiện click cho các nút filter
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });

    // --- KHỞI TẠO BAN ĐẦU ---
    // Hiển thị các bài đăng "Chờ duyệt" khi tải trang
    const initialPosts = appData.posts.filter(post => post.status === 'pending');
    renderApprovalList(initialPosts);
});