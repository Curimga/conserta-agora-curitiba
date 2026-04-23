import { MessageCircle, MapPin } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="py-10 bg-foreground">
      <div className="container text-center text-background/70 text-sm space-y-2">
        <p className="font-semibold text-background text-base">AJJ Conserto de Microondas</p>
        <p className="inline-flex items-center justify-center gap-1">
          <MapPin size={14} /> Rua Carlos Blanck, 315 — Conjunto Phoenix · Portão · Curitiba — PR
        </p>
        <div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-whatsapp transition-colors"
          >
            <MessageCircle size={14} /> (41) 99980-1413
          </a>
        </div>
        <p className="pt-4 border-t border-background/10 mt-4">
          © {new Date().getFullYear()} AJJ Conserto de Microondas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
