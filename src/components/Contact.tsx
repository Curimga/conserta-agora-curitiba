import { MessageCircle, Phone, Store } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export default function Contact() {
  return (
    <section id="contato" className="py-16 bg-surface">
      <div className="container text-center max-w-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Entre em contato</h2>
        <p className="mt-3 text-muted-foreground">
          Tire dúvidas pelo WhatsApp. Lembre-se: o orçamento é feito somente na loja.
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-foreground">
          <Phone size={20} />
          <span className="text-lg font-semibold">(41) 99980-1413</span>
        </div>
        <a
          href={whatsappLink("Olá, gostaria de tirar uma dúvida")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground w-full py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
        >
          <MessageCircle size={24} /> Falar no WhatsApp
        </a>
        <div className="mt-4 inline-flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <Store size={16} /> Orçamento somente na loja física
        </div>
      </div>
    </section>
  );
}
