import { CheckCircle2 } from "lucide-react";

const items = [
  "Técnicos experientes",
  "Peças originais",
  "Atendimento rápido",
  "Serviço confiável",
];

export default function Authority() {
  return (
    <section className="py-16 bg-surface">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Desde 2000 consertando micro-ondas em Curitiba
        </h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item} className="flex flex-col items-center gap-3 bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle2 className="text-whatsapp" size={32} />
              <span className="font-semibold text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
