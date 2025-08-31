
// Gửi dữ liệu đến Telegram Bot
export async function sendToTelegram({ shortUrl, caption, images }) {
  const botToken = '8494948538:AAGoQUWPLy9TK9Svi_v7QZ5YiPf6-SDVv3U';       // Thay bằng token bot của bạn
  const chatId = '-1002536046297';          // Thay bằng ID nhóm hoặc người nhận

  if (images.length > 0) {
    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('caption', `${caption}\n${shortUrl}`);
    formData.append('photo', images[0]);

    await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
      method: 'POST',
      body: formData
    });
  } else {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: `${caption}\n${shortUrl}`
      })
    });
  }
}
