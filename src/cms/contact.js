// Turns the single "Phone / Mobile" and "Address" values an editor types into
// everything the site needs: tap-to-call link, WhatsApp link, map link.

const digitsOf = (s) => String(s ?? '').replace(/\D/g, '');

// "+91 99950 66663" | "99950 66663" | "099950 66663"  ->  "919995066663"
// A 10-digit number is assumed to be Indian (+91); anything longer is assumed
// to already carry its country code.
export function normalizePhone(value) {
  let d = digitsOf(value);
  if (d.length === 11 && d.startsWith('0')) d = d.slice(1);
  if (d.length === 10) d = `91${d}`;
  return d;
}

export const telHref = (digits) => (digits ? `tel:+${digits}` : undefined);

export const whatsappHref = (digits, message) =>
  `https://wa.me/${digits}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const mapsHref = (mapsUrl, addressText) =>
  mapsUrl ||
  (addressText
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressText)}`
    : undefined);
