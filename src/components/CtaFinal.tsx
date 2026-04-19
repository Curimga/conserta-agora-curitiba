import { MessageCircle, Store } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export default function CtaFinal() {
  return (
    <section className="py-20 bg-primary">
      <div className="container text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-primary-foreground leading-tight">
          Traga seu micro-ondas para{" "}
          <span className="text-whatsapp">avaliação sem compromisso</span>
        </h2>
        <p className="mt-4 text-primary-foreground/70 text-lg">
          Atendimento somente na loja física em Curitiba.
        </p>
        <a
          href={whatsappLink("Olá, gostaria de saber o endereço e horário de funcionamento da loja")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground px-10 py-4 rounded-xl font-bold text-lg transition-colors shadow-xl"
        >
          <MessageCircle size={24} /> Falar no WhatsApp
        </a>
        <div className="mt-5 inline-flex items-center justify-center gap-2 text-primary-foreground/80 text-sm">
          <Store size={16} /> Orçamento somente presencial
        </div>
      </div>
    </section>
  );
}
