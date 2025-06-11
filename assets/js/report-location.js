document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reportForm');
    const locationInput = document.getElementById('location');
    const imageUpload = document.getElementById('imageUpload');
    const descriptionInput = document.getElementById('description');

    // Check if user is logged in
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('username').textContent = username;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Basic validation
        if (!locationInput.value.trim()) {
            alert('Vui lòng nhập địa chỉ');
            return;
        }

        if (!descriptionInput.value.trim()) {
            alert('Vui lòng nhập mô tả tình huống');
            return;
        }

        // Create FormData object
        const formData = new FormData();
        formData.append('location', locationInput.value.trim());
        formData.append('description', descriptionInput.value.trim());

        // Add image if selected
        if (imageUpload.files.length > 0) {
            formData.append('imageUpload', imageUpload.files[0]);
        }

        // Here you would typically make an API call to your backend
        console.log('Report submission:', {
            location: locationInput.value.trim(),
            description: descriptionInput.value.trim(),
            hasImage: imageUpload.files.length > 0
        });

        // For demonstration, you can redirect to a success page
        // window.location.href = 'success.html';
    });

    // Preview image before upload
    imageUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                alert('Vui lòng chọn file hình ảnh');
                imageUpload.value = '';
                return;
            }

            const reader = new FileReader();
            reader.onload = function(e) {
                // You could add image preview functionality here
                console.log('Image loaded:', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
}); 