import srv1 from "@/assets/real/srv1.jpg";
import srv2 from "@/assets/real/srv2.jpg";
import srv3 from "@/assets/real/srv3.jpg";
import { ClipboardCheck } from "lucide-react";

const services = [
  {
    img: srv1,
    title: "Manutenção de forno de micro-ondas",
    desc: "Diagnóstico completo e reparo profissional do seu aparelho. Não se preocupe — cuidamos de tudo.",
  },
  {
    img: srv2,
    title: "Conserto de porta de micro-ondas",
    desc: "Travas, dobradiças e vedação. Consertos de alta qualidade para sua segurança.",
  },
  {
    img: srv3,
    title: "Reposição de peças originais",
    desc: "Peças originais com garantia. Ao seu dispor para todos os modelos do mercado.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-16 bg-surface">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Serviços de reparo</h2>
          <p className="mt-3 text-muted-foreground">Estamos aqui para ajudar — confira o que fazemos:</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <img
                src={s.img}
                alt={s.title}
                width={600}
                height={400}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-foreground text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <ClipboardCheck size={18} className="text-whatsapp" />
          Revisão completa e diagnóstico técnico realizados em nossa oficina
        </div>
      </div>
    </section>
  );
}
