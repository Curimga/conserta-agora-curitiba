import { MessageCircle, Camera, FileText, Zap } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Chame no WhatsApp", desc: "Envie uma mensagem rápida" },
  { icon: Camera, title: "Envie foto do aparelho", desc: "Para um diagnóstico inicial" },
  { icon: FileText, title: "Receba o orçamento", desc: "Sem compromisso" },
  { icon: Zap, title: "Conserto rápido", desc: "Seu micro-ondas volta a funcionar" },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 bg-background">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Como Funciona</h2>
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
