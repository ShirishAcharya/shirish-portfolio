"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "shirishachrya@gmail.com",
    href: "mailto:shirishachrya@gmail.com",
    hint: "Preferred for opportunities",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/shirish-acharya",
    href: "https://www.linkedin.com/in/shirish-acharya/",
    hint: "Professional network",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "ShirishAcharya",
    href: "https://github.com/ShirishAcharya",
    hint: "Code & projects",
  },
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="font-mono text-xs text-[var(--primary)] tracking-widest uppercase">
          // contact
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
          Let's build
          <br />
          <span className="text-[var(--muted)]">something great.</span>
        </h2>
        <p className="text-[var(--muted)] mt-4 leading-relaxed max-w-md">
          Open to backend and full-stack roles, freelance projects, or just interesting
          conversations about systems and AI.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* Left – contact form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-xl text-sm text-[var(--foreground)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--primary)]/60 focus:ring-1 focus:ring-[var(--primary)]/20 transition-all font-[var(--font-sans)]"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">
                Email
              </label>
              <input
                type="email"
                name="reply_to"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-xl text-sm text-[var(--foreground)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--primary)]/60 focus:ring-1 focus:ring-[var(--primary)]/20 transition-all font-[var(--font-sans)]"
              />
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[var(--muted)] uppercase tracking-widest">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="What's on your mind?"
                className="w-full px-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-xl text-sm text-[var(--foreground)] placeholder:text-[var(--muted)]/50 focus:outline-none focus:border-[var(--primary)]/60 focus:ring-1 focus:ring-[var(--primary)]/20 transition-all resize-none font-[var(--font-sans)]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary)] text-black font-semibold rounded-xl text-sm hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed transition shadow-lg shadow-[var(--primary)]/20"
            >
              {status === "sending" ? (
                <>
                  <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>

            {/* Feedback */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-emerald-400 text-sm font-mono"
                >
                  <CheckCircle className="h-4 w-4" />
                  Message sent! I'll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm font-mono"
                >
                  <AlertCircle className="h-4 w-4" />
                  Something went wrong. Try emailing directly.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

        {/* Right – contact cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          {contactMethods.map((method, i) => (
            <motion.a
              key={i}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="group flex items-center gap-5 p-5 bg-[var(--card)] border border-[var(--border)] rounded-xl hover:border-[var(--primary)]/40 transition-all duration-200"
            >
              <div className="p-3 rounded-lg bg-[var(--primary)]/5 border border-[var(--primary)]/10 group-hover:bg-[var(--primary)]/10 transition-colors">
                <method.icon className="h-5 w-5 text-[var(--primary)]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{method.label}</span>
                  <span className="text-[10px] font-mono text-[var(--muted)]">·</span>
                  <span className="text-[10px] font-mono text-[var(--muted)]">{method.hint}</span>
                </div>
                <p className="text-sm text-[var(--muted)] font-mono truncate mt-0.5">{method.value}</p>
              </div>
              <span className="text-[var(--muted)] group-hover:text-[var(--primary)] transition-colors text-lg">↗</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-24 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-mono text-[var(--muted)]"
      >
        <span>© {new Date().getFullYear()} Shirish Acharya</span>
        <span>Built with Next.js + Tailwind</span>
      </motion.div>
    </section>
  );
}