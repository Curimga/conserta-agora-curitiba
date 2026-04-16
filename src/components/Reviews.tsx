import { Star } from "lucide-react";

const reviews = [
  { name: "Maria S.", text: "Atendimento rápido e preço justo. Meu micro-ondas voltou a funcionar no mesmo dia!" },
  { name: "Carlos A.", text: "Meu micro-ondas voltou a funcionar perfeitamente. Recomendo a todos!" },
  { name: "Ana P.", text: "Profissionais muito competentes. Orçamento honesto e serviço impecável." },
  { name: "Roberto L.", text: "Já é a segunda vez que uso o serviço. Sempre excelente! Peças originais de verdade." },
  { name: "Fernanda M.", text: "Achei que teria que comprar outro, mas eles consertaram rápido e barato." },
];

export default function Reviews() {
  return (
    <section id="avaliacoes" className="py-16 bg-surface">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">O que nossos clientes dizem</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-left">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-3 text-muted-foreground italic">"{r.text}"</p>
              <p className="mt-3 font-semibold text-foreground">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
