import { AlertTriangle } from "lucide-react";
import microwaveImg from "@/assets/real/foto2.jpg";

const problems = [
  "Micro-ondas não esquenta",
  "Não liga",
  "Faz barulho estranho",
  "Problemas na porta",
];

export default function Problems() {
  return (
    <section className="py-16 bg-surface">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={microwaveImg}
            alt="Microondas com defeito em manutenção na assistência técnica de Curitiba"
            width={1280}
            height={720}
            loading="lazy"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Problemas comuns que consertamos no seu microondas em Curitiba
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((p) => (
              <div key={p} className="flex items-center gap-3 bg-background rounded-xl p-4 shadow-sm">
                <AlertTriangle className="text-destructive shrink-0" size={22} />
                <span className="font-medium text-foreground">{p}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-muted-foreground text-lg">
            Traga até a nossa loja e nossos técnicos farão a{" "}
            <strong className="text-foreground">análise completa</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
