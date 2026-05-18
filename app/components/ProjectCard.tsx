'use client';

import { useRouter } from 'next/navigation';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/projects/${project.slug}`)}
      className="group h-full border border-slate-700 rounded-lg p-6 bg-slate-900/50 hover:bg-slate-900/80 hover:border-slate-600 transition-all duration-300 cursor-pointer">
      {/* Badge */}
      {project.badge && (
        <div className="inline-block mb-3 text-sm text-blue-400">
          {project.badge}
        </div>
      )}

      {/* Título */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>

      {/* Subtítulo */}
      <p className="text-sm text-slate-400 mb-3">{project.subtitle}</p>

      {/* Descrição */}
      <p className="text-sm text-slate-400 mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Tecnologias */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>

      {/* Ano + Status */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>{project.year}</span>
        <span
          className={
            project.status === 'completed'
              ? 'text-green-400'
              : 'text-yellow-400'
          }
        >
          {project.status === 'completed' ? 'Concluído' : 'Em Progresso'}
        </span>
      </div>

      {/* Links */}
      <div className="flex gap-3 mt-4 pt-4 border-t border-slate-700">
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
          >
            Demo
          </a>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
          >
            GitHub
          </a>
        )}
        {project.links.figma && (
          <a
            href={project.links.figma}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
          >
            Figma
          </a>
        )}
      </div>
    </div>
  );
}
