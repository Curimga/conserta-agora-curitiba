import { Zap, Clock } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export default function Urgency() {
  return (
    <section className="py-14 bg-whatsapp">
      <div className="container text-center">
        <div className="flex items-center justify-center gap-3 text-whatsapp-foreground">
          <Zap size={28} />
          <h2 className="text-2xl md:text-3xl font-extrabold">Atendimento rápido em Curitiba</h2>
        </div>
        <div className="mt-3 flex items-center justify-center gap-2 text-whatsapp-foreground/90">
          <Clock size={18} />
          <p className="font-medium">Vagas limitadas por dia — garanta a sua!</p>
        </div>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-bold text-base hover:opacity-90 transition-opacity shadow-lg"
        >
          <MessageCircle size={20} /> Falar no WhatsApp agora
        </a>
      </div>
    </section>
  );
}
