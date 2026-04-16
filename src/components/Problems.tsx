import { AlertTriangle } from "lucide-react";

const problems = [
  "Micro-ondas não esquenta",
  "Não liga",
  "Faz barulho estranho",
  "Porta não fecha direito",
];

export default function Problems() {
  return (
    <section className="py-16 bg-background">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Seu micro-ondas apresenta algum desses problemas?
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {problems.map((p) => (
            <div key={p} className="flex items-center gap-3 bg-surface rounded-xl p-5 shadow-sm">
              <AlertTriangle className="text-destructive shrink-0" size={24} />
              <span className="font-medium text-foreground text-left">{p}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-muted-foreground text-lg">
          Se o seu micro-ondas apresenta algum desses problemas, <strong className="text-foreground">nós resolvemos!</strong>
        </p>
      </div>
    </section>
  );
}
