import { Wrench, DoorOpen, RefreshCw, ClipboardCheck } from "lucide-react";

const services = [
  { icon: Wrench, title: "Manutenção de micro-ondas", desc: "Diagnóstico completo e reparo profissional" },
  { icon: DoorOpen, title: "Conserto de porta", desc: "Travas, dobradiças e vedação" },
  { icon: RefreshCw, title: "Troca de peças", desc: "Peças originais com garantia" },
  { icon: ClipboardCheck, title: "Revisão completa", desc: "Limpeza e verificação preventiva" },
];

export default function Services() {
  return (
    <section id="servicos" className="py-16 bg-surface">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Nossos Serviços</h2>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <s.icon className="mx-auto text-primary" size={36} />
              <h3 className="mt-4 font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
