import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SKILL_CATEGORIES = [
  {
    title: 'Linguagens',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML', 'CSS', 'SQL', 'NoSQL'],
  },
  {
    title: 'Frameworks & Libs',
    skills: ['React', 'Node.js', 'Tailwind CSS', 'Bootstrap', 'Express', 'Angular'],
  },
  {
    title: 'Ferramentas e Plataformas',
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Figma', 'Insomnia', 'IntelliJ', 'Supabase', 'Firebase', 'Cloudflare', 'Resend', 'Vercel'],
  },
  {
    title: 'Redes & Infra',
    skills: ['TCP/IP', 'DNS', 'DHCP', 'Firewall', 'Active Directory'],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-2">
            // Stack Técnica
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-16">
            Principais <span className="text-primary">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * catIdx }}
              className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-sm p-6 hover:border-primary/30 transition-all group"
            >
              <h3 className="font-mono text-xs text-primary tracking-widest uppercase mb-6 pb-3 border-b border-border">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.1 * catIdx + 0.05 * skillIdx }}
                    className="flex items-center gap-3 group/skill"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/skill:bg-primary transition-colors" />
                    <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}