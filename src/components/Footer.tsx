import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="py-8 bg-foreground">
      <div className="container text-center text-background/70 text-sm space-y-2">
        <p className="font-semibold text-background text-base">AJJ Conserto de Microondas</p>
        <p>Curitiba — PR</p>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-whatsapp transition-colors">
          <MessageCircle size={14} /> (41) 99980-1413
        </a>
        <p className="pt-4 border-t border-background/10 mt-4">
          © {new Date().getFullYear()} AJJ Conserto de Microondas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
