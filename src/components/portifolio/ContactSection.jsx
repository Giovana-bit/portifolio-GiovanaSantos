import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const CONTACTS = [
  {
    label: 'Gmail',
    href: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox/FMfcgzQgLPTMbVRnSGHkllqWKdMwzQbh?compose=DmwnWslzCFpjTcctWLGQkNhvgZMNtGZFRCxdzmjKMrKsHxgjxcksHNsWrjbgPhqJhWdBvpPXdmfG',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/giovana-dos-santos-silva-164259285/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Giovana-bit',
    icon: Github,
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" ref={ref} className="py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-2">
            // Vamos Conectar
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-16">
            Entre em <span className="text-primary">Contato</span>
          </h2>
        </motion.div>

        <div className="flex items-center gap-6">
          {CONTACTS.map((contact, i) => (
            <motion.a
              key={i}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              title={contact.label}
              className="group flex items-center justify-center w-14 h-14 border border-border/50 rounded-sm text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <contact.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}