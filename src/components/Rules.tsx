import { Store, MessageSquareOff, Home, Truck, ShieldCheck } from "lucide-react";

const rules = [
  {
    icon: MessageSquareOff,
    title: "Não fazemos orçamento pelo WhatsApp",
    desc: "Cada aparelho precisa ser avaliado pelo técnico para garantir um diagnóstico correto.",
  },
  {
    icon: Store,
    title: "Atendimento somente na loja física",
    desc: "Traga seu micro-ondas até nossa oficina em Curitiba para análise técnica.",
  },
  {
    icon: Home,
    title: "Não atendemos a domicílio",
    desc: "Todo o serviço é realizado em nossa bancada, com equipamentos adequados.",
  },
  {
    icon: Truck,
    title: "Não buscamos e não entregamos",
    desc: "O cliente é responsável pela entrega e retirada do aparelho.",
  },
  {
    icon: ShieldCheck,
    title: "Se não aprovar o orçamento, não paga nada",
    desc: "Total transparência: avaliação sem compromisso e sem custo se não fechar.",
  },
];

export default function Rules() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block bg-whatsapp/10 text-whatsapp font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
            Atenção — Como trabalhamos
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">
            Como funciona o nosso atendimento de conserto de microondas
          </h2>
          <p className="mt-3 text-muted-foreground">
            Para oferecer o melhor serviço com honestidade, seguimos algumas regras importantes:
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rules.map((r) => (
            <div
              key={r.title}
              className="bg-surface border-l-4 border-whatsapp rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <r.icon className="text-primary" size={28} />
              <h3 className="mt-4 font-bold text-foreground text-lg">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
