import { ClipboardCheck, Dumbbell, Moon, ArrowRight, Sparkles } from "lucide-react";

const questionnaires = [
  {
    id: "ready",
    title: "Buongiorno",
    description: "Inizia la tua giornata con il piede giusto. Un breve check-in per monitorare il tuo stato di prontezza.",
    url: "https://questionario1buongiornosonopronto.vercel.app/",
    icon: <ClipboardCheck className="w-6 h-6 text-emerald-400" />,
    border: "border-emerald-900/50",
    bg: "bg-emerald-950/20",
    hoverBg: "hover:bg-emerald-900/30",
    btnColor: "bg-emerald-500"
  },
  {
    id: "training",
    title: "Allenamento",
    description: "Monitora i tuoi progressi fisici e tecnici. Registra ogni sessione per superare i tuoi limiti.",
    url: "https://allenamento-teal.vercel.app?_vercel_share=zU1U3ClSAQGDrGrCjer7qdhDZsmwFRW9",
    icon: <Dumbbell className="w-6 h-6 text-blue-400" />,
    border: "border-blue-900/50",
    bg: "bg-blue-950/20",
    hoverBg: "hover:bg-blue-900/30",
    btnColor: "bg-blue-500"
  },
  {
    id: "night",
    title: "Buonanotte",
    description: "Rifletti sulla tua giornata e prepara la mente per un riposo rigenerante.",
    url: "https://buona-notte-phi.vercel.app?_vercel_share=gpVrX5tALmb59CWKKJV5rpf4E2tDGJZ9",
    icon: <Moon className="w-6 h-6 text-indigo-400" />,
    border: "border-indigo-900/50",
    bg: "bg-indigo-950/20",
    hoverBg: "hover:bg-indigo-900/30",
    btnColor: "bg-indigo-500"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-white/10">
      <main className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <header className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">
              Personal Hub
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            I miei questionari
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-xl italic">
            Ci vediamo al mattino, post-allenamento e prima di andare a dormire... ti voglio tanto bene ❤️
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {questionnaires.map((q) => (
            <a
              key={q.id}
              href={q.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col p-6 rounded-2xl border ${q.border} ${q.bg} ${q.hoverBg} transition-all duration-200 active:scale-[0.98]`}
              id={`link-${q.id}`}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-black/50 border border-white/5">
                  {q.icon}
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
              
              <h2 className="text-xl font-semibold text-white mb-2">
                {q.title}
              </h2>
              
              <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                {q.description}
              </p>

              <div className={`mt-auto w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold ${q.btnColor} text-black uppercase tracking-wider`}>
                Apri
              </div>
            </a>
          ))}
        </div>

        <footer className="mt-20 pt-8 border-t border-white/5 text-[10px] text-slate-600 uppercase tracking-widest flex justify-between">
          <span>© 2026 F. Mondinelli</span>
          <span>Fast Mode Enabled</span>
        </footer>
      </main>
    </div>
  );
}
