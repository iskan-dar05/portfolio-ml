import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MathVisual from "./components/MathVisual";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row selection:bg-accent/10 selection:text-accent">
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-6 border-b border-border sticky top-0 bg-white z-50">
        <div className="font-bold tracking-tight text-xl">Machine Learning Engineer & Full-Stack Developer<span className="text-accent">.</span></div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Sidebar / Info Section */}
      <aside className={`
        fixed inset-0 z-40 bg-sidebar border-r border-border p-[100px] md:p-12 flex flex-col justify-between overflow-hidden
        transition-transform duration-300 md:translate-x-0 md:static md:w-[320px] lg:w-[380px] sm:py-3 md:h-screen md:sticky md:top-0
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="space-y-8">
          <div className="w-32 h-32 rounded-xl bg-slate-200 border border-border overflow-hidden">
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">Boukhenoufa Iskandar</h1>
            <p className="text-accent font-medium text-sm">Full Stack Engineer & Data Scientist</p>
          </div>

          <p className="text-sm leading-relaxed text-muted">
            Specializing in scalable backend architectures and AI-integrated systems. Bridging the gap between rigorous mathematics and production-grade software engineering.
          </p>
        </div>

        <div className="pt-8 border-t border-border space-y-3 text-xs text-muted">
          <a href="mailto:iskandarboukhenoufa23@gmail.com" className="flex items-center gap-2 cursor-pointer hover:text-primary">
            <Mail size={14} /> iskandarboukhenoufa23@gmail.com
          </a>
          <a target="_blank" href="https://github.com/iskan-dar05" className="flex items-center gap-2 cursor-pointer hover:text-primary">
            <Github size={14} /> https://github.com/iskan-dar05
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/iskandar-boukhenoufa-97a81532a/" className="flex items-center gap-2 cursor-pointer hover:text-primary">
            <Linkedin size={14} /> https://www.linkedin.com/in/iskandar-boukhenoufa-97a81532a/
          </a>
          <div className="flex items-center gap-2">
            <a
              href="../public/cv.pdf"
              download="Iskandar_Boukhenoufa_CV.pdf"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Download CV
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 lg:p-16 max-w-5xl">

        <Routes>
          {/* Home page (your current layout content) */}
          <Route
            path="/"
            element={
              <div className="space-y-24">
                <section id="skills">
                  <div className="section-line">Technical Expertise</div>
                  <Skills />
                </section>

                <section id="math">
                  <div className="section-line">Mathematical Modeling</div>
                  <div className="space-y-8">
                    <p className="text-muted text-sm leading-relaxed max-w-2xl">
                      My background in Linear Algebra, Calculus, and Statistics isn't just academic—it's the foundation of how I build.
                    </p>
                    <MathVisual />
                  </div>
                </section>

                <section id="projects">
                  <div className="section-line">Featured Projects</div>
                  <Projects />
                </section>

                <section id="contact">
                  <div className="section-line">Get In Touch</div>
                  <Contact />
                </section>
              </div>
            }
          />

          {/* Project details page */}
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>

        <footer className="mt-24 pt-8 border-t border-border text-[11px] text-muted uppercase tracking-widest">
          © {new Date().getFullYear()} Professional Portfolio. Built with React, Node.js & Mathematical Precision.
        </footer>
      </main>
    </div>
  );
}
