export const WHATSAPP_NUMBER = '919995066663';

const DEFAULT_MESSAGE =
  "Hello Exatech IT Solutions, I am ready to engineer my business to the next level.";

export function whatsappLink(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
