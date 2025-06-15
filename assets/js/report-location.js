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
    // LOGIC CHO TRANG BÁO CÁO
    // ================================================
    const reportForm = document.getElementById('reportForm');
    const imageUploadInput = document.getElementById('imageUpload');
    const imagePreview = document.getElementById('image-preview');
    const uploadPlaceholder = document.getElementById('upload-placeholder');
    
    // Chỉ thực thi nếu các phần tử tồn tại
    if (imageUploadInput && imagePreview && uploadPlaceholder) {
        // Lắng nghe sự kiện thay đổi trên input file
        imageUploadInput.addEventListener('change', function(event) {
            const file = event.target.files[0];
            
            if (file) {
                // Tạo một đối tượng FileReader để đọc file
                const reader = new FileReader();
                
                // Định nghĩa hành động khi file được đọc xong
                reader.onload = function(e) {
                    // Gán dữ liệu ảnh vào src của thẻ img preview
                    imagePreview.src = e.target.result;
                    
                    // Hiển thị ảnh preview và ẩn placeholder
                    imagePreview.style.display = 'block';
                    uploadPlaceholder.style.display = 'none';
                }
                
                // Bắt đầu đọc file ảnh
                reader.readAsDataURL(file);
            }
        });
    }

    // Xử lý sự kiện gửi form
    if (reportForm) {
        reportForm.addEventListener('submit', function(event) {
            // Ngăn chặn hành vi gửi form mặc định của trình duyệt
            event.preventDefault(); 
            
            // Lấy dữ liệu từ form (ví dụ)
            const location = document.getElementById('location').value;
            const description = document.getElementById('description').value;
            const imageFile = imageUploadInput.files[0];

            // Kiểm tra dữ liệu
            if (!location || !description || !imageFile) {
                alert('Vui lòng điền đầy đủ tất cả các trường và tải lên một hình ảnh.');
                return;
            }

            // Giả lập việc gửi form thành công
            alert('Báo cáo đã được gửi thành công!\nCảm ơn bạn đã giúp đỡ.');

            // Reset lại form và giao diện
            reportForm.reset();
            imagePreview.style.display = 'none';
            uploadPlaceholder.style.display = 'flex';
            imagePreview.src = "#"; // Xóa cache ảnh cũ
        });
    }

    console.log('Trang báo cáo đã tải xong!');
});