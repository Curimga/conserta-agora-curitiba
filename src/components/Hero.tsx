import { MessageCircle, Store } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import heroImg from "@/assets/hero-technician.jpg";

export default function Hero() {
  return (
    <section id="inicio" className="pt-16 bg-primary">
      <div className="container grid md:grid-cols-2 gap-8 items-center py-16 md:py-24">
        <div className="animate-fade-up">
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight">
            Seu micro-ondas parou?{" "}
            <span className="text-whatsapp">Consertamos com qualidade e transparência</span>
          </h1>
          <p className="mt-4 text-primary-foreground/70 text-lg md:text-xl">
            Mais de 20 anos de experiência em Curitiba.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappLink("Olá, gostaria de tirar uma dúvida sobre conserto de micro-ondas")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground px-6 py-3.5 rounded-lg font-bold text-base transition-colors shadow-lg"
            >
              <MessageCircle size={20} /> Falar no WhatsApp
            </a>
          </div>
          <div className="mt-5 inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-medium">
            <Store size={18} className="text-whatsapp" />
            Orçamento somente na loja física
          </div>
        </div>
        <div className="animate-fade-up-delay flex justify-center">
          <img
            src={heroImg}
            alt="Técnico consertando micro-ondas em oficina especializada"
            width={1280}
            height={720}
            className="rounded-2xl shadow-2xl w-full max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
