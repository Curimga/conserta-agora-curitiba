import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export default function CtaFinal() {
  return (
    <section className="py-20 bg-primary">
      <div className="container text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-primary-foreground leading-tight">
          Não compre outro micro-ondas —<br />
          <span className="text-whatsapp">conserte o seu hoje</span>
        </h2>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground px-10 py-4 rounded-xl font-bold text-lg transition-colors shadow-xl"
        >
          <MessageCircle size={24} /> Solicitar orçamento grátis
        </a>
      </div>
    </section>
  );
}
