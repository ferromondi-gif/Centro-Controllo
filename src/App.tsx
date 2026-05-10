import { motion } from "motion/react";
import { ClipboardCheck, Dumbbell, ArrowRight, Sparkles } from "lucide-react";

const questionnaires = [
  {
    id: "ready",
    title: "Buongiorno",
    description: "Inizia la tua giornata con il piede giusto. Un breve check-in per monitorare il tuo stato di prontezza e motivazione.",
    url: "https://questionario1buongiornosonopronto.vercel.app/",
    icon: <ClipboardCheck className="w-8 h-8 text-emerald-400" />,
    color: "from-emerald-500/20 to-emerald-900/20",
    border: "border-emerald-500/30",
    hover: "hover:border-emerald-500/60",
    button: "bg-emerald-500 hover:bg-emerald-400"
  },
  {
    id: "training",
    title: "Allenamento",
    description: "Monitora i tuoi progressi fisici e tecnici. Registra ogni sessione per superare i tuoi limiti giorno dopo giorno.",
    url: "https://allenamento-kbc535qdg-ferruccio-mondinelli-s-projects.vercel.app/",
    icon: <Dumbbell className="w-8 h-8 text-blue-400" />,
    color: "from-blue-500/20 to-blue-900/20",
    border: "border-blue-500/30",
    hover: "hover:border-blue-500/60",
    button: "bg-blue-500 hover:bg-blue-400"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20 selection:text-white">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-20 lg:py-32">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/50">
                Hub Personale
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              I miei questionari
            </h1>
            <p className="text-lg md:text-xl text-white/40 max-w-2xl leading-relaxed">
              Bentornato. Seleziona uno dei tuoi percorsi qui sotto per continuare a monitorare la tua evoluzione quotidiana.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {questionnaires.map((q, index) => (
            <motion.a
              key={q.id}
              href={q.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`group relative p-8 rounded-3xl border ${q.border} ${q.hover} bg-gradient-to-br ${q.color} transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] cursor-pointer`}
            >
              <div className="flex flex-col h-full h-min-[300px]">
                <div className="mb-8 p-4 w-fit rounded-2xl bg-black/40 backdrop-blur-md border border-white/5 ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-500">
                  {q.icon}
                </div>
                
                <h2 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">
                  {q.title}
                </h2>
                
                <p className="text-white/50 leading-relaxed mb-10 flex-grow">
                  {q.description}
                </p>

                <div className={`mt-auto w-fit flex items-center gap-3 py-3 px-6 rounded-2xl text-sm font-semibold transition-all duration-300 ${q.button} text-black ring-1 ring-white/20 shadow-xl shadow-black/20`}>
                  Vedi Questionario
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            </motion.a>
          ))}
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-32 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-white/30 uppercase tracking-widest font-medium"
        >
          <div>© 2026 Ferruccio Mondinelli</div>
          <div className="hidden md:block">Costruito per l'eccellenza</div>
        </motion.footer>
      </main>
    </div>
  );
}
