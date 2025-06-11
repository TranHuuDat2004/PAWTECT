// assets/js/data-donation.js
// Dữ liệu mẫu cho trang "Quản lý thu chi"

const donationData = {
    transactions: [
        // --- Dữ liệu cho Quỹ đóng góp ---
        {
            title: 'Gói măm măm',
            timestamp: 'Thanh toán lúc 12:50 16/3/2023',
            sender: 'Đặng Thị A',
            amount: '+50.000 vnd',
            type: 'donation' // type: quỹ đóng góp
        },
        {
            title: 'Ủng hộ bé Bông',
            timestamp: 'Thanh toán lúc 11:45 16/3/2023',
            sender: 'Nguyễn Văn B',
            amount: '+100.000 vnd',
            type: 'donation'
        },
        {
            title: 'Gói măm măm',
            timestamp: 'Thanh toán lúc 10:30 16/3/2023',
            sender: 'Trần Thị C',
            amount: '+50.000 vnd',
            type: 'donation'
        },

        // --- Dữ liệu cho Quảng cáo ---
        {
            title: 'Quảng cáo 1 ngày',
            timestamp: 'Thanh toán lúc 09:00 15/3/2023',
            sender: 'Shop PetXinh',
            amount: '+20.000 vnd',
            type: 'ad' // type: quảng cáo
        },
        {
            title: 'Quảng cáo 3 ngày',
            timestamp: 'Thanh toán lúc 18:20 14/3/2023',
            sender: 'Phòng khám Thú Y An Tâm',
            amount: '+50.000 vnd',
            type: 'ad'
        },

        // --- Dữ liệu cho Gói Premium ---
        {
            title: 'Gói Premium 1 tháng',
            timestamp: 'Thanh toán lúc 20:05 17/3/2023',
            sender: 'Lê Văn D',
            amount: '+150.000 vnd',
            type: 'premium' // type: gói premium
        },
        {
            title: 'Gói Premium 1 năm',
            timestamp: 'Thanh toán lúc 07:15 13/3/2023',
            sender: 'Phạm Thị E',
            amount: '+1.500.000 vnd',
            type: 'premium'
        }
    ]
};