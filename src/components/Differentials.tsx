import { DollarSign, FileCheck, Headphones, Award } from "lucide-react";

const diffs = [
  { icon: DollarSign, title: "Mais barato que comprar outro", desc: "Economize consertando seu micro-ondas" },
  { icon: FileCheck, title: "Orçamento sem compromisso", desc: "Avaliamos seu aparelho gratuitamente" },
  { icon: Headphones, title: "Atendimento direto e rápido", desc: "Sem burocracia, pelo WhatsApp" },
  { icon: Award, title: "Experiência desde 2000", desc: "Mais de 20 anos no mercado" },
];

export default function Differentials() {
  return (
    <section className="py-16 bg-primary">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">Por que escolher a AJJ?</h2>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {diffs.map((d) => (
            <div key={d.title} className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 hover:bg-primary-foreground/15 transition-colors">
              <d.icon className="mx-auto text-whatsapp" size={36} />
              <h3 className="mt-4 font-bold text-primary-foreground">{d.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/70">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
