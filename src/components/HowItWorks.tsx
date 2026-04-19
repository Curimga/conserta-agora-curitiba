import { Store, Search, FileText, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: Store, title: "Leve até a loja", desc: "Traga seu micro-ondas em nossa oficina em Curitiba" },
  { icon: Search, title: "Análise técnica", desc: "Nossos técnicos avaliam o aparelho com cuidado" },
  { icon: FileText, title: "Orçamento informado", desc: "Você recebe o orçamento detalhado e transparente" },
  { icon: CheckCircle2, title: "Você decide", desc: "Se não aprovar, não paga nada pela avaliação" },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 bg-background">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Como Funciona</h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          Um processo simples, transparente e sem compromisso.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                {i + 1}
              </div>
              <s.icon className="mt-4 text-whatsapp" size={28} />
              <h3 className="mt-3 font-bold text-foreground">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
