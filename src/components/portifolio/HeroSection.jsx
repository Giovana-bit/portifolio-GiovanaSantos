import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const STATUS_LINES = [
  '> SYSTEM_LOADED',
  '> NETWORKS_ACTIVE',
  '> DEV_MODE_ON',
  '> READY_TO_BUILD',
];

export default function HeroSection({ heroImage }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-sm text-primary tracking-[0.3em] uppercase mb-4"
            >
              Portfólio // 2026
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight"
            >
              Giovana Santos
              <br />
              <span className="text-primary">Dev</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-muted-foreground text-lg max-w-md leading-relaxed"
            >
              Estudante de Engenharia de Software & Engenharia da Computação. 
              Técnica em Desenvolvimento de Sistemas & Redes de Computadores.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 flex gap-4"
            >
              <a
                href="#projetos"
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-primary/90 transition-colors"
              >
                Ver Projetos
              </a>
              <a
                href="#contato"
                className="px-6 py-3 border border-primary/30 text-primary font-semibold text-sm tracking-wider uppercase rounded-sm hover:border-primary hover:bg-primary/5 transition-all"
              >
                Contato
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="bg-secondary/50 backdrop-blur-sm border border-border rounded-sm p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                <div className="w-2.5 h-2.5 rounded-full bg-primary/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
                <span className="ml-2 text-muted-foreground text-xs">terminal_v2.0</span>
              </div>
              {STATUS_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.3 }}
                  className="py-1 text-primary/80"
                >
                  {line}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 2.5, duration: 1, repeat: Infinity }}
                className="py-1 text-muted-foreground"
              >
                {'> _'}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicador */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}