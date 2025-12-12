function countryCodeToFlag(code) {
  if (!code) return '';
  // If it already contains non-ascii chars (likely an emoji), return as-is
  if ([...String(code)].some((ch) => ch.charCodeAt(0) > 127)) return code;
  const cc = String(code).toUpperCase();
  if (!/^[A-Z]{2}$/.test(cc)) return code;
  const first = cc.charCodeAt(0) + 127397;
  const second = cc.charCodeAt(1) + 127397;
  return String.fromCodePoint(first, second);
}

// Return a PNG flag URL for a 2-letter country code, or null if not applicable
function getFlagSrc(code, size = 24) {
  if (!code) return null;
  const cc = String(code).trim().toLowerCase();
  if (!/^[a-z]{2}$/.test(cc)) return null;
  const w = size;
  const h = Math.round((size * 3) / 4);
  return `https://flagcdn.com/${w}x${h}/${cc}.png`;
}

export { countryCodeToFlag, getFlagSrc };
