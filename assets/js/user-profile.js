// assets/js/user-profile.js
// Logic cho trang user.html (ĐÃ CẬP NHẬT)

document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const userPostsContainer = document.getElementById('user-posts-list-container');
    const handledCasesContainer = document.getElementById('handled-cases-container');

    if (!userPostsContainer || !handledCasesContainer) {
        return;
    }

    // --- LOGIC CHUYỂN TAB (Giữ nguyên) ---
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            const tabId = button.dataset.tab;
            document.getElementById(`${tabId}-content`).classList.add('active');
        });
    });

    // --- HÀM HELPER MỚI: TÍNH THỜI GIAN TƯƠNG ĐỐI ---
    function formatTimeAgo(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const seconds = Math.round((now - date) / 1000);

        const minutes = Math.round(seconds / 60);
        const hours = Math.round(minutes / 60);
        const days = Math.round(hours / 24);
        const months = Math.round(days / 30.44); // Trung bình số ngày trong tháng
        const years = Math.round(days / 365.25);

        if (seconds < 60) {
            return `vài giây trước`;
        } else if (minutes < 60) {
            return `${minutes} phút trước`;
        } else if (hours < 24) {
            return `${hours} giờ trước`;
        } else if (days < 30) {
            return `${days} ngày trước`;
        } else if (months < 12) {
            return `${months} tháng trước`;
        } else {
            return `${years} năm trước`;
        }
    }

    // --- LOGIC RENDER DỮ LIỆU (ĐÃ CẬP NHẬT) ---

    // 1. Render danh sách bài đăng cho tab "Bài đăng"
    function renderUserPosts(posts) {
        userPostsContainer.innerHTML = '';
        let htmlContent = '';
        posts.forEach(post => {
            // Gọi hàm helper để lấy thời gian tương đối
            const timeAgo = formatTimeAgo(post.timestamp); 

            htmlContent += `
                <div class="user-post-card">
                    <div class="post-header">
                        <div class="user-avatar-small"></div>
                        <div class="user-info">
                            <span class="user-name">${post.userName}</span>
                            <span class="post-time">${timeAgo}</span>
                        </div>
                    </div>
                    <div class="post-image-placeholder" style="background-image: url('${post.imageUrl}')"></div>
                </div>
            `;
        });
        userPostsContainer.innerHTML = htmlContent;
    }

    // 2. Render danh sách các case đã tiếp nhận cho tab "Về tôi"
    function renderHandledCases(posts) {
        const handledPosts = posts.filter(post => post.status === 'handled');
        handledCasesContainer.innerHTML = '';
        let htmlContent = '';
        if (handledPosts.length === 0) {
            htmlContent = '<p class="empty-message">Chưa tiếp nhận ca nào.</p>';
        } else {
            handledPosts.forEach(post => {
                htmlContent += `
                    <div class="approval-card">
                        <div class="approval-card-body">
                            <div class="post-details">
                                <h3>${post.id}</h3>
                                <p class="update-time">${post.updateTime}</p>
                                <p><strong>Địa chỉ:</strong> ${post.address}</p>
                                <p><strong>Miêu tả:</strong> ${post.description}</p>
                            </div>
                            <div class="post-thumbnail" style="background-image: url('${post.imageUrl}')"></div>
                        </div>
                    </div>
                `;
            });
        }
        handledCasesContainer.innerHTML = htmlContent;
    }

    // --- KHỞI TẠO BAN ĐẦU ---
    if (typeof appData !== 'undefined' && appData.posts) {
        // Giả sử trang cá nhân hiển thị tất cả các bài đăng
        // Bạn có thể lọc lại nếu muốn, ví dụ: appData.posts.filter(p => p.userName === 'An Nguyễn')
        renderUserPosts(appData.posts); 
        renderHandledCases(appData.posts);
    } else {
        console.error("Không tìm thấy dữ liệu appData. Hãy chắc chắn file data.js đã được nhúng.");
    }
});