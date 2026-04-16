import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md shadow-lg">
      <div className="container flex items-center justify-between h-16">
        <a href="#inicio" className="text-primary-foreground font-extrabold text-lg tracking-tight">
          AJJ <span className="font-medium text-sm opacity-80">Conserto de Microondas</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            <MessageCircle size={16} /> Falar no WhatsApp
          </a>
        </nav>

        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium">
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-whatsapp-foreground px-4 py-2 rounded-lg text-sm font-semibold w-full justify-center"
            >
              <MessageCircle size={16} /> Falar no WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
