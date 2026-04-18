import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowRight, Code2, Brain, Database, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-20 overflow-hidden math-grid">
      {/* Background Accents */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <Terminal size={14} />
          <span>Full Stack & AI Engineer</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-slate-900">
          Building <span className="text-primary">Scalable</span> Systems with <span className="italic font-serif text-slate-700">Mathematical</span> Precision.
        </h1>
        
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Specializing in Laravel, Python, and AI integration. I bridge the gap between complex data science and robust backend architecture.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="rounded-full px-8">
            View Projects <ArrowRight className="ml-2" size={18} />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8">
            Contact Me
          </Button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-slate-400">
          <a href="#" className="hover:text-primary transition-colors"><Github size={24} /></a>
          <a href="#" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
          <a href="#" className="hover:text-primary transition-colors"><Mail size={24} /></a>
        </div>
      </motion.div>

      {/* Profile Image Placeholder */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-20 relative"
      >
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
          <img 
            src="https://picsum.photos/seed/developer/400/400" 
            alt="Profile" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white p-2 rounded-xl shadow-lg -rotate-6 hidden md:block">
          <div className="w-full h-full bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
            <Code2 size={32} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
