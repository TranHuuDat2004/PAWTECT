document.addEventListener('DOMContentLoaded', () => {

  // ================================================
  // LOGIC CHO SIDEBAR
  // ================================================
  const menuIcon = document.getElementById('menu-icon');
  const sidebarNav = document.getElementById('sidebar-nav');
  const closeBtn = document.getElementById('close-btn');
  const overlay = document.getElementById('overlay');

  // Kiểm tra xem các element có tồn tại không trước khi gán sự kiện
  if (menuIcon && sidebarNav && closeBtn && overlay) {
      // Mở sidebar
      menuIcon.addEventListener('click', () => {
          sidebarNav.classList.add('active');
          overlay.classList.add('active');
      });

      // Đóng sidebar bằng nút 'x'
      closeBtn.addEventListener('click', () => {
          sidebarNav.classList.remove('active');
          overlay.classList.remove('active');
      });

      // Đóng sidebar khi click ra ngoài (lớp phủ)
      overlay.addEventListener('click', () => {
          sidebarNav.classList.remove('active');
          overlay.classList.remove('active');
      });
  }


  // ================================================
  // CÁC CHỨC NĂNG KHÁC CỦA TRANG CHỦ
  // ================================================

  // Ví dụ: Xử lý sự kiện click cho nút "Xem ngay"
  const viewButtons = document.querySelectorAll('.btn-view');
  viewButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          alert('Chức năng "Xem ngay" đang được phát triển!');
      });
  });

  console.log('Trang chủ Pawtect đã tải xong!');
});