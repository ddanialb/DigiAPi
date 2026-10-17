

export function escapeHTML(value = '') {
  return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
export function destinationUrl(value) {
  const uri = typeof value === 'string' ? value : value?.uri || value?.url;
  if (typeof uri !== 'string' || !uri.trim() || uri.trim() === '#') return '#';
  try {
    const url = new URL(uri, value?.base || 'https://www.digikala.com');
    return ['https:', 'http:'].includes(url.protocol) ? url.href : '#';
  } catch { return '#'; }
}
export function digiUrl(value) { return escapeHTML(destinationUrl(value)); }
export function productHref(product) {
  const url = destinationUrl(product?.url);
  if (url !== '#') return escapeHTML(url);

  const id = String(product?.id || '');
  return /^\d+$/.test(id) ? `https://www.digikala.com/product/dkp-${id}/` : '#';
}
