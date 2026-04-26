import { MapPin, Store, Navigation } from "lucide-react";
import workshopImg from "@/assets/real/foto3.jpg";

export default function Location() {
  return (
    <section className="py-16 bg-background">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={workshopImg}
            alt="Loja AJJ Conserto de Microondas no Portão, Curitiba"
            width={1280}
            height={720}
            loading="lazy"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
        <div>
          <MapPin className="text-primary" size={40} />
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">
            Onde estamos: oficina de conserto de microondas no Portão, Curitiba
          </h2>
          <p className="mt-3 text-foreground text-lg font-semibold">Curitiba — PR</p>
          <p className="mt-2 text-muted-foreground">
            Rua Carlos Blanck, 315 — Conjunto Phoenix<br />
            Bairro Portão · Sobrado amarelo
          </p>
          <p className="mt-4 text-muted-foreground">
            Atendimento exclusivamente presencial em nossa oficina especializada.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <div className="inline-flex items-center gap-2 bg-surface text-foreground px-4 py-2.5 rounded-lg text-sm font-medium border border-border">
              <Store size={18} className="text-whatsapp" />
              Traga seu micro-ondas para análise
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Carlos+Blanck+315+Portão+Curitiba"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:opacity-90 px-4 py-2.5 rounded-lg text-sm font-semibold transition-opacity"
            >
              <Navigation size={16} /> Ver no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
