import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground flex items-center justify-center shadow-xl animate-pulse-whatsapp transition-colors"
    >
      <MessageCircle size={28} />
    </a>
  );
}
