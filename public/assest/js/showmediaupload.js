// Hiển thị ảnh preview khi người dùng chọn ảnh
const imageInput = document.getElementById('images');
const previewContainer = document.getElementById('preview');

imageInput.addEventListener('change', function () {
  previewContainer.innerHTML = ''; // Xóa ảnh cũ
  const files = Array.from(this.files);

  files.forEach(file => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.width = '100px';
        img.style.height = '100px';
        img.style.objectFit = 'cover';
        img.style.border = '1px solid #ccc';
        img.style.borderRadius = '6px';
        img.style.marginRight = '8px';
        previewContainer.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  });
});
