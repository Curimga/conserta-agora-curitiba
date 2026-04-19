import { Store, ShieldCheck } from "lucide-react";

export default function Urgency() {
  return (
    <section className="py-14 bg-whatsapp">
      <div className="container text-center">
        <div className="flex items-center justify-center gap-3 text-whatsapp-foreground">
          <ShieldCheck size={28} />
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Avaliação sem compromisso na loja
          </h2>
        </div>
        <div className="mt-3 flex items-center justify-center gap-2 text-whatsapp-foreground/90">
          <Store size={18} />
          <p className="font-medium">Se não aprovar o orçamento, você não paga nada.</p>
        </div>
      </div>
    </section>
  );
}
