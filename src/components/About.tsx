import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import aboutImg from "@/assets/real/foto4.jpg";

export default function About() {
  return (
    <section className="py-16 bg-background">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={aboutImg}
            alt="Bancada de conserto de microondas da AJJ em Curitiba"
            width={1745}
            height={540}
            loading="lazy"
            className="rounded-2xl shadow-xl w-full object-cover h-full"
          />
        </div>
        <div>
          <span className="inline-block bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
            Sobre o nosso negócio
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">
            Quem somos: a AJJ, referência em conserto de microondas no Portão
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A <strong className="text-foreground">AJJ Conserto de Microondas</strong> foi fundada em{" "}
            <strong className="text-foreground">2000</strong>. Desde o nosso primeiro dia de trabalho oferecemos
            serviços de reparo de alta qualidade para os moradores de Curitiba.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Priorizamos o uso de <strong className="text-foreground">peças originais</strong> em nossos reparos.
            Com anos de experiência, consertamos todos os modelos de micro-ondas existentes no mercado.
          </p>
          <a
            href={whatsappLink("Olá, gostaria de mais informações sobre o conserto do meu micro-ondas")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground px-5 py-3 rounded-lg font-semibold transition-colors shadow-md"
          >
            <MessageCircle size={18} /> Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
}
