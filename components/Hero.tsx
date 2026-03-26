"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TYPED_LINES = [
  { text: 'class BackendEngineer:', color: 'text-violet-400' },
  { text: '  def __init__(self):', color: 'text-sky-300' },
  { text: '    self.name = "Shirish Acharya"', color: 'text-emerald-300' },
  { text: '    self.focus = ["AI", "Scalability"]', color: 'text-orange-300' },
  { text: '    self.location = "Kathmandu, NP"', color: 'text-orange-300' },
  { text: '', color: '' },
  { text: '  def build(self) -> System:', color: 'text-sky-300' },
  { text: '    # Engineering magic here', color: 'text-slate-500' },
  { text: '    return scalable_solution()', color: 'text-violet-400' },
];

function TypingTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (visibleLines < TYPED_LINES.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 120);
      return () => clearTimeout(t);
    } else {
      setDone(true);
    }
  }, [visibleLines]);

  return (
    <div className="font-mono text-sm rounded-xl overflow-hidden border border-[var(--border)] bg-[#0d1117] shadow-2xl shadow-black/60">
      {/* Title bar */}
      <div className="bg-[#161b22] px-4 py-3 border-b border-[var(--border)] flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs text-[var(--muted)]">shirish.py</span>
        <span className="ml-auto text-xs text-[var(--muted)] opacity-50">python 3.11</span>
      </div>
      {/* Code body */}
      <div className="p-5 space-y-1 min-h-[240px]">
        {TYPED_LINES.slice(0, visibleLines).map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            className={`${line.color || 'text-slate-300'} leading-relaxed whitespace-pre`}
          >
            {line.text || '\u00A0'}
          </motion.p>
        ))}
        {!done && (
          <span className="inline-block w-2 h-[1.1em] bg-[var(--primary)] opacity-90 animate-pulse align-middle" />
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
            <span className="font-mono text-xs text-[var(--primary)] tracking-widest uppercase">
              Available for work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-4"
          >
            Shirish
            <br />
            <span className="text-[var(--primary)]">Acharya</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-[var(--muted)] text-lg leading-relaxed mb-8 max-w-md"
          >
            AI-focused backend engineer. Building{" "}
            <span className="text-[var(--foreground)]">scalable systems</span> and{" "}
            <span className="text-[var(--foreground)]">intelligent applications</span> at the
            intersection of backend and ML.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-[var(--primary)] text-black font-semibold rounded-lg text-sm hover:brightness-110 transition shadow-lg shadow-[var(--primary)]/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-[var(--border)] text-[var(--muted)] rounded-lg text-sm hover:border-[var(--primary)]/50 hover:text-[var(--foreground)] transition"
            >
              Get in touch →
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-8 mt-12 pt-8 border-t border-[var(--border)]"
          >
            {[
              { value: "5+", label: "Projects shipped" },
              { value: "3", label: "Projects Ongoing" },
              { value: "∞", label: "Problems solved" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-mono text-2xl font-bold text-[var(--primary)]">{value}</div>
                <div className="text-xs text-[var(--muted)] mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right – terminal */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:block"
        >
          <TypingTerminal />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-[var(--muted)] tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="w-px h-8 bg-gradient-to-b from-[var(--muted)] to-transparent"
        />
      </motion.div>
    </section>
  );
}