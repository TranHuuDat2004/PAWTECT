// assets/js/data.js

const appData = {
    // Dữ liệu cho trang "Bài đăng"
    posts: [
        // --- BÀI ĐĂNG CHỜ DUYỆT pending ---
                {
            id: 'CASE #202',
            userName: 'Chi Lê',
            timestamp: '2025-06-10T16:45:00Z',
            updateTime: 'Cập nhật lúc 16:45 16/3/2023',
            address: 'Gần cầu Sài Gòn, Bình Thạnh',
            description: 'Chó bị tai nạn xe, nằm bên vệ đường, cần được cấp cứu.',
            imageUrl: '/assets/images/cau-sai-gon.jpg',
            status: 'unhandled'
        },
        {
            id: 'CASE #101',
            userName: 'An Nguyễn', // <-- DỮ LIỆU MỚI
            timestamp: '2024-10-27T10:00:00Z', // <-- DỮ LIỆU MỚI (thời gian chuẩn UTC)
            updateTime: 'Cập nhật lúc 09:15 17/3/2023',
            address: '19 Nguyễn Hữu Thọ, Quận 7',
            description: 'Mèo con bị bỏ rơi trong thùng carton, cần giúp đỡ khẩn cấp.',
            imageUrl: '/assets/images/dai-hoc-ton-duc-thang.jpg',
            status: 'pending'
        },
        {
            id: 'CASE #102',
            userName: 'Bình Trần',
            timestamp: '2024-10-27T08:30:00Z',
            updateTime: 'Cập nhật lúc 11:30 17/3/2023',
            address: 'Công viên Lê Thị Riêng, Quận 10',
            description: 'Phát hiện một chú chó bị lạc, có vẻ sợ hãi, không có vòng cổ.',
            imageUrl: '/assets/images/cong-vien-le-thi-rieng.jpg',
            status: 'pending'
        },

        // --- BÀI ĐĂNG CHƯA TIẾP NHẬN unhandled---
        {
            id: 'CASE #201',
            userName: 'An Nguyễn',
            timestamp: '2023-10-26T14:00:00Z',
            updateTime: 'Cập nhật lúc 14:00 16/3/2023',
            address: 'Khu công nghệ cao, Thủ Đức',
            description: 'Đàn mèo con mới đẻ không có mẹ, đang ở bãi đất trống.',
            imageUrl: '/assets/images/dai-hoc-fpt-tp-hcm-1.jpg',
            status: 'unhandled'
        },


        // --- BÀI ĐĂNG ĐÃ TIẾP NHẬN handled---
        {
            id: 'CASE #301',
            userName: 'Bình Trần',
            timestamp: '2023-10-24T08:00:00Z',
            updateTime: 'Cập nhật lúc 08:00 15/3/2023',
            address: 'Chung cư The Sun Avenue, Quận 2',
            description: 'Bé mèo tam thể đã được đội cứu hộ đưa về trạm.',
            imageUrl: '/assets/images/chung-cu.jpg',
            status: 'handled'
        }
    ]
};