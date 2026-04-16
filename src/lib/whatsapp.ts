const PHONE = "5541999801413";
const DEFAULT_MESSAGE = "Olá, gostaria de um orçamento para conserto de micro-ondas";

export function whatsappLink(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}
