"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "shirishachrya@gmail.com",
    href: "mailto:shirishachrya@gmail.com",
    color: "text-blue-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/shirish-acharya",
    href: "https://www.linkedin.com/in/shirish-acharya/",
    color: "text-blue-600",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ShirishAcharya",
    href: "https://github.com/ShirishAcharya",
    color: "text-gray-800 dark:text-gray-200",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12"
      >
        Let's Connect
      </motion.h2>

      <p className="text-lg text-[var(--muted)] mb-12 max-w-2xl mx-auto">
        I am currently open to backend/full-stack opportunities, freelance projects, or just interesting conversations. Reach out!
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {contactMethods.map((method, i) => (
          <motion.a
            key={i}
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{
              scale: 1.08,
              rotate: 3,
              transition: { duration: 0.3 },
            }}
            className="group flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-[var(--primary)] hover:shadow-xl transition-all duration-300"
          >
            <div className={`p-4 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-[var(--primary)]/10 transition-colors ${method.color}`}>
              <method.icon className="h-8 w-8" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg group-hover:text-[var(--primary)] transition-colors">
                {method.label}
              </h3>
              <p className="text-sm text-[var(--muted)] mt-1 break-all">
                {method.value}
              </p>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Optional: Add a simple contact form or Calendly embed here later if you want */}
      <div className="mt-16">
        <a
          href="mailto:shirishachrya@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-opacity-90 transition"
        >
          <Send className="h-5 w-5" />
          Send a Message
        </a>
      </div>
    </section>
  );
}