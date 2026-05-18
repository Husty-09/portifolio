'use client';

import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import AnimatedCard from './AnimatedCard';

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <AnimatedCard key={project.slug}>
          <ProjectCard project={project} />
        </AnimatedCard>
      ))}
    </div>
  );
}
