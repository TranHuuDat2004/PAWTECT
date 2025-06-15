document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const petGrid = document.getElementById('pet-grid');

    // Chỉ thực thi logic nếu các phần tử tồn tại
    if (!loadMoreBtn || !petGrid) {
        return;
    }

    // Dữ liệu giả cho các thú cưng sẽ được tải thêm
    const additionalPets = [
        {
            name: "Rocky",
            description: "Thích chạy nhảy, rất trung thành",
            imageUrl: "https://i.imgur.com/dK3f2Tf.jpg"
        },
        {
            name: "Luna",
            description: "Một tiểu thư kiêu kỳ, thích ngủ",
            imageUrl: "https://i.imgur.com/gT3hCjm.jpg"
        },
        {
            name: "Buddy",
            description: "Thân thiện với mọi người",
            imageUrl: "https://i.imgur.com/rWq5iIu.jpg"
        },
        {
            name: "Daisy",
            description: "Nhẹ nhàng và tình cảm",
            imageUrl: "https://i.imgur.com/lM0z2mL.jpg"
        },
        {
            name: "Max",
            description: "Oai vệ như một vị vua",
            imageUrl: "https://i.imgur.com/k2tC8h8.jpg"
        },
        {
            name: "Lucy",
            description: "Bé nhỏ nhưng rất dũng cảm",
            imageUrl: "https://i.imgur.com/c14L7pY.jpg"
        }
    ];

    let currentPetIndex = 0; // Theo dõi vị trí thú cưng tiếp theo cần tải

    // Hàm để tạo HTML cho một thẻ thú cưng
    function createPetCard(pet) {
        const card = document.createElement('div');
        card.className = 'pet-card';
        card.innerHTML = `
            <img src="${pet.imageUrl}" alt="Ảnh của ${pet.name}">
            <div class="pet-info">
                <span class="pet-name">${pet.name}</span>
                <p class="pet-description">${pet.description}</p>
            </div>
        `;
        return card;
    }

    // Hàm xử lý việc tải thêm thú cưng
    function loadPets() {
        const petsToLoad = 2; // Tải 2 thú cưng mỗi lần click

        for (let i = 0; i < petsToLoad; i++) {
            if (currentPetIndex >= additionalPets.length) {
                // Nếu đã hết dữ liệu, ẩn nút và dừng lại
                loadMoreBtn.style.display = 'none';
                return;
            }

            const petData = additionalPets[currentPetIndex];
            const newPetCard = createPetCard(petData);
            petGrid.appendChild(newPetCard);
            
            currentPetIndex++;
        }
    }

    // Gán sự kiện click cho nút "Đọc thêm"
    loadMoreBtn.addEventListener('click', loadPets);

    console.log('Trang tìm bạn đồng hành đã sẵn sàng!');
});