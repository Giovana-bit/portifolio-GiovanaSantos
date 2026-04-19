import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Download } from 'lucide-react';
import perfil from '../../img/perfil.jpg';

export default function AboutSection({ aboutImage }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [photoUrl, setPhotoUrl] = useState(null);

  return (
    <section id="sobre" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={aboutImage}
          alt="Server room background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-2">
            // Quem sou eu
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-16">
            Sobre <span className="text-primary">Mim</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* FOTO + BOTÃO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col items-center gap-6"
          >
            <div className="relative group max-w-sm w-full">
              <div className="aspect-square rounded-sm overflow-hidden bg-secondary border border-border relative">
                <img
                  src={photoUrl || perfil}
                  alt="Profile photo"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500" />
              </div>

              <div className="absolute -inset-3 border border-primary/20 rounded-sm -z-10" />
            </div>

            {/*BOTÃO CURRÍCULO */}
            <a
              href="/doc/curriculoGiovana.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              <Download className="w-4 h-4" />
              Baixar Currículo
            </a>
          </motion.div>

          {/* BIO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs text-primary tracking-widest uppercase">
                Disponível para Freelance
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: 'Nome', value: 'Giovana Santos' },
                { label: 'Idade', value: '19 anos' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-secondary/50 border border-border/50 rounded-sm px-4 py-3 hover:border-primary/30 transition-colors"
                >
                  <p className="font-mono text-[10px] text-primary tracking-widest uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold truncate">{item.value}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Estudante de <span className="text-foreground font-medium">Engenharia de Software e Engenharia da Computação</span>, 
              com formação técnica em <span className="text-primary font-medium">Desenvolvimento de Sistemas</span> e 
              <span className="text-primary font-medium"> Redes de Computadores</span>. Apaixonada por tecnologia 
              e resolução de problemas, sempre em busca de evoluir e contribuir com projetos que fazem a diferença.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Graduação', value: 'Eng. de Software & Eng. de Computação', status: 'Em andamento' },
                { label: 'Técnico', value: 'Desenvolvimento de Sistemas', status: 'Concluído' },
                { label: 'Técnico', value: 'Redes de Computadores', status: 'Concluído' },
                { label: 'Complementar', value: 'Cursos & Certificações', status: 'Contínuo' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-secondary/50 border border-border/50 rounded-sm p-4 hover:border-primary/30 transition-colors"
                >
                  <p className="font-mono text-[10px] text-primary tracking-widest uppercase">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium mt-1">{item.value}</p>
                  <p className="font-mono text-[10px] text-muted-foreground mt-2 uppercase">
                    {item.status}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}