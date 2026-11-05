import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  label?: string;
};

export default function ProjectCard({ project, label = "Featured" }: ProjectCardProps) {
  return (
    <Link className="project-card" to={`/projects/${project.slug}`}>
      <div className="project-image-wrap">
        <img className="project-image" src={project.image} alt={`${project.name} in ${project.city}`} loading="lazy" />
        <span className="project-tag">{label}</span>
        <span className="project-card-arrow"><ArrowRight size={18} strokeWidth={1.7} /></span>
      </div>
      <div className="flex items-start justify-between gap-4 pt-5">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.13em] text-terracotta">{project.brand}</p>
          <h3 className="font-display text-[1.65rem] leading-tight tracking-[-0.035em]">{project.name}</h3>
          <p className="mt-2 flex items-center gap-1.5 text-[13px] text-muted"><MapPin size={14} strokeWidth={1.7} />{project.city}</p>
        </div>
        <p className="hidden max-w-[210px] pt-5 text-[13px] leading-6 text-muted sm:block">
          {project.description ?? "Ask our property team for current project information and availability."}
        </p>
      </div>
    </Link>
  );
}
