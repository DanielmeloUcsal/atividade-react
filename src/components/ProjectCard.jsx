import React from 'react';
import ProgressBar from './ProgressBar.jsx';
export default function ProjectCard({ project, onOpen }) {
  return <article className="project-card">
    <div className="project-top"><span className={`project-symbol ${project.category.toLowerCase()}`} aria-hidden="true">{project.icon}</span><span className={`status-pill ${project.progress === 100 ? 'done' : ''}`}>{project.progress === 100 ? 'Concluído' : 'Em andamento'}</span></div>
    <p className="project-category">{project.category}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p>
    <ProgressBar value={project.progress} label={`Progresso: ${project.name}`} />
    <div className="project-footer"><span>◷ &nbsp;{project.deadline}</span><button onClick={() => onOpen(project)} aria-label={`Ver detalhes de ${project.name}`}>Ver detalhes <span aria-hidden="true">↗</span></button></div>
  </article>;
}
