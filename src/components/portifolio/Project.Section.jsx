import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

// ✅ IMPORT CORRETO (SEM public)
import educonnect from '../../img/educonnectpro.png';
import estoque from '../../img/estoque.png';
import orcamento from '../../img/orcamento.png';
import webchat from '../../img/webchat.png';
import redesocial from '../../img/redesocial.png';

const PROJECTS = [
  {
    id: 1,
    title: 'EduConnect Pro',
    image_url: educonnect,
    description: 'Plataforma educacional completa com autenticação, envio de emails e deploy otimizado.',
    site_url: 'https://www.educonnectpro.com.br/',
    tech_stack: ['React', 'TypeScript', 'Styled-Components', 'Supabase', 'Vercel', 'Resend', 'Cloudflare'],
  },
  {
    id: 2,
    title: 'Sistema de Estoque de Veículos',
    image_url: estoque,
    description: 'Sistema para gerenciamento de veículos com controle de estoque e cadastro.',
    repo_url: 'https://github.com/Giovana-bit/CRUD-frontend-sistemaAutomotivo',
    tech_stack: ['HTML', 'JavaScript', 'CSS', 'Java', 'Spring Boot'],
  },
  {
    id: 3,
    title: 'Gerador de Orçamento de Aluguel',
    image_url: orcamento,
    description: 'Aplicação para cálculo automático de orçamentos de aluguel.',
    repo_url: 'https://github.com/Giovana-bit/imobiliariaOrcamento',
    tech_stack: ['Python', 'Flask', 'HTML', 'CSS'],
  },
  {
    id: 4,
    title: 'Web Chat',
    image_url: webchat,
    description: 'Chat em tempo real com comunicação instantânea usando WebSockets.',
    repo_url: 'https://github.com/Giovana-bit/web-chat-bd3-2025-2',
    tech_stack: ['Node.js', 'Socket.io', 'Express', 'HTML', 'CSS'],
  },
  {
    id: 5,
    title: 'Rede Social com Firestore',
    image_url: redesocial,
    description: 'Rede social com autenticação e dados em tempo real usando Firebase.',
    repo_url: 'https://github.com/Giovana-bit/bd3-atv-rede-social-firestore-giovana',
    tech_stack: ['Firebase', 'JavaScript', 'HTML', 'CSS'],
  },
];

export default function ProjectsSection({ bgImage }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projetos" ref={ref} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgImage} className="w-full h-full object-cover opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <p className="font-mono text-xs text-primary uppercase mb-2">
              // Meus Trabalhos
            </p>
            <h2 className="text-4xl font-black mb-16">
              Projetos <span className="text-primary">Finalizados</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer border rounded-sm overflow-hidden hover:-translate-y-1 transition"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold">{project.title}</h3>
                    <ArrowUpRight className="w-4 h-4 mt-1" />
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tech_stack.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="text-[10px] font-mono text-primary/70 bg-primary/5 px-2 py-0.5 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}

                    {project.tech_stack.length > 3 && (
                      <span className="text-[10px] font-mono text-muted-foreground">
                        +{project.tech_stack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}