import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-end"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

        {/* Painel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="relative w-full max-w-xl h-full bg-card border-l border-border overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botão fechar */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-foreground transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Imagem */}
          {project.image_url && (
            <div className="aspect-video w-full overflow-hidden bg-secondary">
              <img
                src={project.image_url}
                alt={project.title}
                onError={(e) => (e.target.src = "/img/fallback.png")}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-8 space-y-8">
            {/* Título */}
            <div>
              <p className="font-mono text-xs text-primary tracking-widest uppercase mb-2">
                Projeto
              </p>
              <h3 className="text-3xl font-black">
                {project.title}
              </h3>
            </div>

            {/* Tech Stack */}
            {project.tech_stack?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.tech_stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary border border-border text-xs font-mono text-primary rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* DESCRIÇÃO */}
            {project.description && (
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            )}

            {/* 🔥 BOTÕES */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              {project.site_url && (
                <a
                  href={project.site_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visitar Aplicação
                </a>
              )}

              {project.repo_url && (
                <a
                  href={project.repo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-primary/30 text-primary font-semibold text-sm tracking-wider uppercase rounded-sm hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <Github className="w-4 h-4" />
                  Código Fonte
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}