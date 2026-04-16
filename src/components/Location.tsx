import { MapPin } from "lucide-react";

export default function Location() {
  return (
    <section className="py-16 bg-background">
      <div className="container text-center">
        <MapPin className="mx-auto text-primary" size={40} />
        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">Nossa Localização</h2>
        <p className="mt-3 text-muted-foreground text-lg">Curitiba — PR</p>
        <p className="mt-1 text-muted-foreground">Atendemos toda a região de Curitiba e região metropolitana</p>
      </div>
    </section>
  );
}
