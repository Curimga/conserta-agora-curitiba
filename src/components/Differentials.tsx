import { Award, FileCheck, Eye, Wrench } from "lucide-react";

const diffs = [
  { icon: Award, title: "Mais de 20 anos de experiência", desc: "Atuando em Curitiba desde o ano 2000" },
  { icon: FileCheck, title: "Orçamento sem compromisso", desc: "Avaliação na loja sem custo se não aprovar" },
  { icon: Eye, title: "Transparência total", desc: "Diagnóstico claro e honesto, sem surpresas" },
  { icon: Wrench, title: "Serviço especializado", desc: "Foco exclusivo em conserto de micro-ondas" },
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
