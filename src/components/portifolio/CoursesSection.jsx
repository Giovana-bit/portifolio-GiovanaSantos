import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Award } from 'lucide-react';

const COURSES = [
  {
    title: 'Back-end em Java',
    platform: 'Ada Tech',
    year: '2025',
    url: 'https://ada.tech/certificado?code=0dc66523-abc7-8de5-142f-b71b0b169f39',
    tags: ['Java', 'Back-end', 'Programação Orientada a Objetos'],
  },
  {
    title: 'Introdução a Java',
    platform: 'Ada Tech',
    year: '2025',
    url: 'https://ada.tech/certificado?code=5d2d82b7-89ef-8db0-2992-65c930413442',
    tags: ['Java', 'Introdução à Programação'],
  },
  {
    title: 'CCNA: Introduction to Networks',
    platform: 'CISCO NetAcad',
    year: '2024',
    url: 'https://www.credly.com/badges/fae74bde-ef0e-4c52-98c2-37a3833c328b/linked_in_profile',
    tags: ['TCP/IP', 'Ethernet', 'Fundamentos da Segurança de Redes', 'Ip Serviços', 'Ip Conectividade', 'Endereçamento IPv4', 'Endereçamento IPv4 e IPv6'],
  },
  {
    title: 'Endpoint Security',
    platform: 'CISCO NetAcad',
    year: '2024',
    url: 'https://www.credly.com/badges/834ab6d8-5f36-4066-9a5f-236909962168/linked_in_profile',
    tags: ['Linux', 'Antimalware Proteção', 'Windows Security', 'Segurança de Dispositivos Móveis', 'Segurança de Navegadores', 'Segurança de E-mail', 'Segurança de Aplicativos'],
  },
    {
    title: 'Engenharia de Dados',
    platform: 'Ada Tech',
    year: '2024',
    url: 'https://ada.tech/certificado?code=56cb5331-b2f9-a25a-c800-048aca061550',
    tags: ['SQL', 'Python', 'Git', 'Docker', 'Computação em Nuvem', 'Web Scraping', 'Engenharia de Dados'],
  },
];

export default function CoursesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="cursos" ref={ref} className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-2">
            // Formação Complementar
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-16">
            Cursos & <span className="text-primary">Certificações</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COURSES.map((course, i) => (
            <motion.a
              key={i}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group bg-card/50 border border-border/50 rounded-sm p-6 flex flex-col gap-4 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              {/* Icon + Year */}
              <div className="flex items-center justify-between">
                <Award className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                <span className="font-mono text-[10px] text-muted-foreground tracking-widest">{course.year}</span>
              </div>

              {/* Title */}
              <div>
                <h3 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="font-mono text-[10px] text-primary/60 uppercase tracking-wider mt-1">
                  {course.platform}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {course.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-[10px] font-mono bg-secondary text-muted-foreground px-2 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors mt-1">
                <ExternalLink className="w-3 h-3" />
                <span>Ver certificado</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}