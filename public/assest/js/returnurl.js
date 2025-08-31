import { shortenUrl } from './rutgonurl.js';
import { sendToTelegram } from './telegrambot.js';

document.addEventListener('DOMContentLoaded', function () {
  const submitBtn = document.getElementById('submitBtn');

  submitBtn.addEventListener('click', async function () {
    const link = document.getElementById('link').value.trim();
    const caption = document.getElementById('caption').value.trim();
    const images = document.getElementById('images').files;

    if (!link || !caption) {
      alert('Vui lòng nhập đầy đủ link và caption!');
      return;
    }

    try {
      const shortUrl = await shortenUrl(link);
      await sendToTelegram({ shortUrl, caption, images });
      alert('✅ Đã gửi thành công!');
    } catch (error) {
      console.error('Lỗi gửi Telegram:', error);
      alert('❌ Gửi thất bại. Vui lòng kiểm tra lại!');
    }
  });
});
