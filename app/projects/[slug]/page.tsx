import { projects } from '@/data/projects';
import Link from 'next/link';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="text-blue-400 hover:text-blue-300">
          ← Voltar
        </Link>
        <h1 className="text-4xl font-bold text-white mt-8">Projeto não encontrado</h1>
      </main>
    );
  }

  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Voltar */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Voltar
      </Link>

      {/* Cabeçalho */}
      <div className="mb-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white mb-2">{project.title}</h1>
            <p className="text-lg text-slate-400">{project.subtitle}</p>
          </div>
          {project.badge && (
            <div className="text-sm text-blue-400 bg-blue-500/10 border border-blue-500/30 rounded px-3 py-1 flex-shrink-0">
              {project.badge}
            </div>
          )}
        </div>
      </div>

      {/* Descrição Longa */}
      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-slate-300 leading-relaxed text-base">
          {project.longDescription}
        </p>
      </div>

      {/* Informações */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 py-8 border-t border-b border-slate-700/50">
        {/* Ano */}
        <div>
          <h3 className="text-xs uppercase tracking-wider text-slate-500 mb-2">Ano</h3>
          <p className="text-white font-medium">{project.year}</p>
        </div>

        {/* Status */}
        <div>
          <h3 className="text-xs uppercase tracking-wider text-slate-500 mb-2">Status</h3>
          <span
            className={`inline-block px-3 py-1 rounded text-xs font-medium ${
              project.status === 'completed'
                ? 'bg-green-500/20 text-green-300'
                : 'bg-yellow-500/20 text-yellow-300'
            }`}
          >
            {project.status === 'completed' ? 'Concluído' : 'Em Progresso'}
          </span>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xs uppercase tracking-wider text-slate-500 mb-2">Links</h3>
          <div className="flex flex-wrap gap-2">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
              >
                Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1 rounded bg-slate-700/50 text-slate-300 border border-slate-600 hover:bg-slate-700 transition-colors"
              >
                GitHub
              </a>
            )}
            {project.links.figma && (
              <a
                href={project.links.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
              >
                Figma
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Tecnologias */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4">Tecnologias</h2>
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-sm px-4 py-2 rounded-full bg-slate-800/50 text-slate-300 border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-12 border-t border-slate-700/50">
        <h3 className="text-2xl font-bold text-white mb-2">Quer saber mais?</h3>
        <p className="text-slate-400 mb-6">Entre em contato para discussões sobre este projeto ou colaborações.</p>
        <a
          href="mailto:matheusscalonico@gmail.com"
          className="inline-block px-6 py-3 rounded bg-blue-500/20 text-blue-300 border border-blue-500/50 hover:bg-blue-500/30 transition-colors font-medium text-sm"
        >
          Enviar Email
        </a>
      </div>
    </main>
  );
}
