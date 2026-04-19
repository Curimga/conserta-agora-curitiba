import { MapPin, Store } from "lucide-react";
import workshopImg from "@/assets/workshop.jpg";

export default function Location() {
  return (
    <section className="py-16 bg-background">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={workshopImg}
            alt="Interior da oficina de assistência técnica de micro-ondas"
            width={1280}
            height={800}
            loading="lazy"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
        <div>
          <MapPin className="text-primary" size={40} />
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">Nossa Loja</h2>
          <p className="mt-3 text-foreground text-lg font-semibold">Curitiba — PR</p>
          <p className="mt-2 text-muted-foreground">
            Atendimento exclusivamente presencial em nossa oficina especializada.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 bg-surface text-foreground px-4 py-2.5 rounded-lg text-sm font-medium border border-border">
            <Store size={18} className="text-whatsapp" />
            Traga seu micro-ondas para análise
          </div>
        </div>
      </div>
    </section>
  );
}
