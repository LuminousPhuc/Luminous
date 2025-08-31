// Rút gọn URL bằng LinkBulks API
export async function shortenUrl(originalUrl) {
  const token = 'df0fc7af237def503560bb5dc40e8ae974f771c6';
  const encodedUrl = encodeURIComponent(originalUrl);
  const shortUrl = `https://linkbulks.com/st?api=${token}&url=${encodedUrl}`;
  return shortUrl;
}
