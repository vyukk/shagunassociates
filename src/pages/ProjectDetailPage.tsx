import { useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CircleHelp,
  MapPin,
  Phone,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { allProjectPages, projects } from "../data/projects";

function MissingProject() {
  return (
    <main className="project-missing section-wrap">
      <p className="eyebrow"><span className="eyebrow-line" /> Project not found</p>
      <h1 className="section-title mt-6">Let&apos;s find another <em>place.</em></h1>
      <p className="mt-5 max-w-lg text-sm leading-7 text-muted">
        This project isn&apos;t in our current online directory. Browse the portfolio or speak with our team for assistance.
      </p>
      <Link to="/#projects" className="button button-dark mt-8">Browse projects <ArrowRight size={16} /></Link>
    </main>
  );
}

export default function ProjectDetailPage() {
  const { slug = "" } = useParams();
  const project = allProjectPages.find((item) => item.slug === slug);

  useEffect(() => {
    document.title = project
      ? `${project.name} — Shagun Associates`
      : "Project not found — Shagun Associates";
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) {
    return <MissingProject />;
  }

  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug && item.brand === project.brand)
    .slice(0, 3);

  const projectDescription = project.description ??
    `${project.name} is listed in the Shagun Associates portfolio in ${project.city}. Contact our team to confirm the project's current status and request the latest information.`;

  return (
    <main className="project-detail">
      <nav className="project-breadcrumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/#projects">Projects</Link>
        <span>/</span>
        <span aria-current="page">{project.name}</span>
      </nav>

      <section className="project-detail-hero">
        <div className="project-detail-heading">
          <div className="project-detail-heading-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> {project.brand} <span className="project-crumb-dot">/</span> Project profile</p>
            <h1 className="mt-5 font-display text-[clamp(2.8rem,6vw,5.6rem)] leading-[0.98] tracking-[-0.055em]">{project.name}</h1>
          </div>
          <p className="project-detail-location"><MapPin size={17} strokeWidth={1.8} />{project.city}, Uttar Pradesh</p>
        </div>
        <div className="project-detail-image-wrap">
          <img src={project.image} alt={`${project.name}, ${project.city}`} />
        </div>
        <div className="project-detail-caption"><Building2 size={15} strokeWidth={1.7} /> Shagun Associates project portfolio</div>
      </section>

      <section className="project-detail-body">
        <article className="project-detail-main">
          <p className="eyebrow"><span className="eyebrow-line" /> Project overview</p>
          <h2 className="section-title mt-6">Get to know<br /><em>{project.name}.</em></h2>
          <p className="mt-7 max-w-[650px] text-[15px] leading-8 text-muted">{projectDescription}</p>
          <div className="project-description-note">
            <CircleHelp size={17} strokeWidth={1.7} />
            <p>Project details, availability and specifications may change. Our team can help you confirm the latest information directly.</p>
          </div>
        </article>

        <aside className="project-enquiry-card">
          <p className="eyebrow"><span className="eyebrow-line" /> Make an enquiry</p>
          <h2 className="mt-4 font-display text-[1.8rem] leading-tight tracking-[-0.04em]">Interested in this project?</h2>
          <p className="mt-3 text-base leading-7 text-muted">Speak with our property team for project information and next steps.</p>
          <a
            href={`mailto:sales@shagunassociates.com?subject=${encodeURIComponent(`Enquiry about ${project.name}`)}`}
            className="button button-dark mt-6 w-full justify-between"
          >
            Enquire about this project <ArrowUpRight size={15} />
          </a>
          <a href="tel:+919837900115" className="project-call-link">
            <Phone size={15} strokeWidth={1.8} />
            <span><span>Call our Meerut office</span><strong>+91 98379 00115</strong></span>
            <ArrowRight size={15} />
          </a>
        </aside>
      </section>

      <section className="project-information">
        <div className="project-information-inner">
          <div className="project-information-heading">
            <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Project information</p>
            <h2 className="mt-5 font-display text-3xl tracking-[-0.04em] text-white sm:text-4xl">The details that matter.</h2>
          </div>
          <dl className="project-information-list">
            <div className="project-information-item">
              <dt><MapPin size={17} strokeWidth={1.7} /> Location</dt>
              <dd>{project.city}, Uttar Pradesh</dd>
            </div>
            <div className="project-information-item">
              <dt><Building2 size={17} strokeWidth={1.7} /> Developer</dt>
              <dd>{project.brand}</dd>
            </div>
            <div className="project-information-item">
              <dt><CircleHelp size={17} strokeWidth={1.7} /> Availability &amp; specifications</dt>
              <dd>Contact our team for current details</dd>
            </div>
          </dl>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="related-projects">
          <div className="section-wrap">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow"><span className="eyebrow-line" /> Explore the portfolio</p>
                <h2 className="mt-5 font-display text-4xl tracking-[-0.05em]">More from {project.brand}.</h2>
              </div>
              <Link to="/#projects" className="text-link hidden sm:inline-flex">View all projects <ArrowRight size={15} /></Link>
            </div>
            <div className="project-grid mt-10">
              {relatedProjects.map((related) => <ProjectCard key={related.slug} project={related} label="View project" />)}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
