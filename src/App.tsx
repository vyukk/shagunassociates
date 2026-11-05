import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronDown,
  House,
  Mail,
  MapPin,
  Phone,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import ansalCourtyard from "../index.php_files/01.png";
import ansalTown from "../index.php_files/02.png";
import dlfGardenCity from "../index.php_files/03.png";
import omaxePalmGreens from "../index.php_files/04.png";
import sportsCity from "../index.php_files/05.png";
import ansalLogo from "../index.php_files/Company_01.png";
import eraLogo from "../index.php_files/Company_02.png";
import omaxeLogo from "../index.php_files/Company_03.png";
import dlfLogo from "../index.php_files/Company_04.png";
import supertechLogo from "../index.php_files/Company_05.png";
import ProjectCard from "./components/ProjectCard";
import { featuredProjects, projects } from "./data/projects";

const heroSlides = [
  { image: ansalCourtyard, title: "Ansal Courtyard", location: "Meerut", eyebrow: "A neighbourhood to grow into" },
  { image: omaxePalmGreens, title: "Omaxe Palm Greens", location: "Greater Noida", eyebrow: "Space to find your own rhythm" },
  { image: dlfGardenCity, title: "DLF Garden City", location: "Lucknow", eyebrow: "Room for the life you imagine" },
  { image: sportsCity, title: "Meerut Sports City", location: "Meerut", eyebrow: "Made for a more active everyday" },
  { image: ansalTown, title: "Ansal Town", location: "Meerut", eyebrow: "A welcoming place to call home" },
];

const developers = [
  { name: "Ansal", image: ansalLogo },
  { name: "Era", image: eraLogo },
  { name: "Omaxe", image: omaxeLogo },
  { name: "DLF", image: dlfLogo },
  { name: "Supertech", image: supertechLogo },
];

const offices = [
  {
    type: "Head office",
    address: "A-126, First Floor, Metro Plaza, Delhi Road, Meerut, U.P.",
    phone: "09837900115",
    secondPhone: "09528001001",
  },
  {
    type: "Meerut branch",
    address: "F-50, Sector-III, Ansal Sushant City, Bypass Road, Meerut",
    phone: "09258085555",
    secondPhone: "09410274848",
  },
  {
    type: "Lucknow branch",
    address: "102, F.F. Good Luck Place, 7 Tilak Marg, Dalibagh, Lucknow",
    phone: "09839348553",
    secondPhone: "09219500456",
  },
  {
    type: "Allahabad branch",
    address: "Near DPS, Omaxe Sangam City, Allahabad, U.P.",
    phone: "09219575575",
    secondPhone: "09410274848",
  },
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [directoryOpen, setDirectoryOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [brandFilter, setBrandFilter] = useState("All");
  const [cityFilter, setCityFilter] = useState("All");
  const slide = heroSlides[activeSlide];
  const cities = useMemo(() => [...new Set(projects.map((project) => project.city))].sort(), []);
  const brands = useMemo(() => [...new Set(projects.map((project) => project.brand))].sort(), []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesBrand = brandFilter === "All" || project.brand === brandFilter;
      const matchesCity = cityFilter === "All" || project.city === cityFilter;
      const matchesQuery =
        !normalizedQuery ||
        `${project.name} ${project.city} ${project.brand}`.toLowerCase().includes(normalizedQuery);
      return matchesBrand && matchesCity && matchesQuery;
    });
  }, [brandFilter, cityFilter, query]);

  const goToSlide = (direction: number) => {
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  const findProjects = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDirectoryOpen(true);
    window.setTimeout(() => document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" }), 0);
  };

  const prepareEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `Property enquiry from ${String(formData.get("name"))}`;
    const body = [
      `Name: ${String(formData.get("name"))}`,
      `Phone: ${String(formData.get("phone"))}`,
      `Interested in: ${String(formData.get("interest"))}`,
      "",
      String(formData.get("message")),
    ].join("\n");
    window.location.href = `mailto:sales@shagunassociates.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
      <main className="min-h-screen bg-paper text-ink">
        <section id="home" className="hero-section">
          <div
            key={slide.title}
            className="hero-photo"
            style={{ backgroundImage: `url("${slide.image}")` }}
            role="img"
            aria-label={`${slide.title}, ${slide.location}`}
          />
          <div className="hero-wash" />
          <div className="hero-grain" />
          <div className="relative mx-auto flex min-h-[650px] max-w-[1440px] flex-col justify-between px-5 pb-8 pt-16 sm:px-8 sm:pt-24 lg:min-h-[690px] lg:px-14 lg:pb-10 lg:pt-28">
            <div className="hero-copy max-w-[780px]">
              <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> {slide.eyebrow}</p>
              <h1 className="mt-7 max-w-[800px] font-display text-[clamp(3.4rem,8vw,7.8rem)] leading-[0.94] tracking-[-0.06em] text-white">
                Find your <span className="italic text-sand">place</span><br />in the world.
              </h1>
              <p className="mt-7 max-w-md text-sm leading-7 text-white/75 sm:text-base">
                Explore residential projects across Uttar Pradesh, with local guidance to help you choose your next address.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a className="button button-light" href="#projects">
                  Explore properties <ArrowUpRight size={15} />
                </a>
                <a className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-white/85 transition hover:text-white" href="#about">
                  Get to know us <ArrowDownRight className="transition group-hover:translate-x-1 group-hover:translate-y-1" size={15} />
                </a>
              </div>
            </div>

            <div className="flex items-end justify-between gap-6">
              <div className="flex items-center gap-3">
                {heroSlides.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    aria-label={`Show ${item.title}`}
                    aria-current={activeSlide === index ? "true" : undefined}
                    className={`hero-indicator ${activeSlide === index ? "hero-indicator-active" : ""}`}
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
                <span className="ml-2 text-xs font-medium tracking-[0.15em] text-white/70">
                  0{activeSlide + 1} <span className="mx-1 text-white/35">/</span> 0{heroSlides.length}
                </span>
              </div>
              <div className="hidden items-center gap-3 text-right text-sm leading-5 text-white/75 sm:flex">
                <MapPin size={14} className="text-sand" />
                <span>{slide.title}<br /><span className="text-white/50">{slide.location}</span></span>
              </div>
              <div className="flex gap-2 sm:hidden">
                <button aria-label="Previous slide" className="hero-arrow" onClick={() => goToSlide(-1)}><ArrowLeft size={17} /></button>
                <button aria-label="Next slide" className="hero-arrow" onClick={() => goToSlide(1)}><ArrowRight size={17} /></button>
              </div>
            </div>
          </div>
          <div className="hero-controls hidden lg:flex">
            <button type="button" aria-label="Previous slide" onClick={() => goToSlide(-1)}><ArrowLeft size={18} /></button>
            <button type="button" aria-label="Next slide" onClick={() => goToSlide(1)}><ArrowRight size={18} /></button>
          </div>
          <div className="hero-search-wrap">
            <form className="hero-search" onSubmit={findProjects}>
              <label className="hero-search-field">
                <span>Looking for</span>
                <span className="hero-search-input">
                  <Search size={17} strokeWidth={1.8} />
                  <input
                    type="search"
                    placeholder="Project, developer or city"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    aria-label="Search projects"
                  />
                </span>
              </label>
              <label className="hero-search-field hero-search-location">
                <span>Preferred location</span>
                <span className="hero-search-input">
                  <MapPin size={17} strokeWidth={1.8} />
                  <select value={cityFilter} onChange={(event) => setCityFilter(event.target.value)} aria-label="Choose a city">
                    <option value="All">All locations</option>
                    {cities.map((city) => <option value={city} key={city}>{city}</option>)}
                  </select>
                </span>
              </label>
              <button className="button button-dark hero-search-submit" type="submit">
                Find a project <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </section>

        <section id="about" className="intro-section section-wrap">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> Your property journey</p>
              <h2 className="section-title mt-6">Find the right place<br />for what comes <em>next.</em></h2>
            </div>
            <div className="flex flex-col justify-between gap-9 lg:pt-12">
              <p className="max-w-[570px] text-[15px] leading-8 text-muted">
                Shagun Associates is a property consultancy connecting homebuyers with residential and commercial projects across Uttar Pradesh. Our portfolio brings together developments from established names, with local teams in Meerut, Lucknow and Allahabad to help you make an informed next move.
              </p>
              <a className="text-link" href="#contact">Talk to a local property advisor <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="intro-rule" />
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-4">
            {[
              { value: "25", label: "Projects in our portfolio" },
              { value: "05", label: "Trusted developer partners" },
              { value: "07", label: "Cities across Uttar Pradesh" },
              { value: "01", label: "Personal approach, always" },
            ].map((stat) => (
              <div key={stat.label} className="stat-item">
                <span className="font-display text-4xl tracking-[-0.04em] text-ink sm:text-[2.8rem]">{stat.value}<span className="text-terracotta">.</span></span>
                <span className="mt-2 max-w-40 text-xs uppercase leading-5 tracking-[0.1em] text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="section-wrap">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="eyebrow"><span className="eyebrow-line" /> The places we know</p>
                <h2 className="section-title mt-6">Explore our <em>projects.</em></h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-muted">
                Compare locations and developers across our portfolio. Open a project to see what we know and ask us for the latest details.
              </p>
            </div>

            <div className="project-grid mt-12">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  label={index < 4 ? "Featured" : "Spotlight"}
                />
              ))}
            </div>

            <div id="directory" className="directory-wrap mt-20">
              <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
                <div>
                  <p className="eyebrow"><span className="eyebrow-line" /> Find a place</p>
                  <h3 className="mt-4 font-display text-3xl tracking-[-0.04em] sm:text-4xl">Our project directory</h3>
                  <p className="mt-3 text-sm text-muted">Find projects by name, location or developer.</p>
                </div>
                <button
                  type="button"
                  className="directory-toggle"
                  aria-expanded={directoryOpen}
                  onClick={() => setDirectoryOpen((open) => !open)}
                >
                  {directoryOpen ? "Close directory" : "Browse all 25 projects"}
                  <ChevronDown size={16} className={directoryOpen ? "rotate-180 transition-transform" : "transition-transform"} />
                </button>
              </div>

              {directoryOpen && (
                <div className="directory-panel">
                  <div className="flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-center sm:justify-between">
                    <label className="search-field">
                      <Search size={16} />
                      <input
                        type="search"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Search a project or city"
                        aria-label="Search projects by name or city"
                      />
                    </label>
                    <label className="filter-field">
                      <span className="sr-only">Filter by location</span>
                      <MapPin size={15} />
                      <select value={cityFilter} onChange={(event) => setCityFilter(event.target.value)}>
                        <option value="All">All locations</option>
                        {cities.map((city) => <option key={city} value={city}>{city}</option>)}
                      </select>
                      <ChevronDown size={15} />
                    </label>
                    <label className="filter-field">
                      <span className="sr-only">Filter by developer</span>
                      <Building2 size={15} />
                      <select value={brandFilter} onChange={(event) => setBrandFilter(event.target.value)}>
                        <option value="All">All developers</option>
                        {brands.map((brand) => <option key={brand} value={brand}>{brand}</option>)}
                      </select>
                      <ChevronDown size={15} />
                    </label>
                  </div>

                  <p className="py-4 text-xs uppercase tracking-[0.1em] text-muted">
                    Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
                  </p>
                  {filteredProjects.length > 0 ? (
                    <div className="directory-grid">
                      {filteredProjects.map((project) => (
                        <Link
                          key={project.slug}
                          to={`/projects/${project.slug}`}
                          className="directory-item"
                        >
                          <span className="directory-item-icon"><House size={17} strokeWidth={1.7} /></span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm font-medium">{project.name}</span>
                            <span className="mt-1 flex items-center gap-1 text-[13px] text-muted"><MapPin size={13} strokeWidth={1.7} />{project.city}<span className="mx-1 text-line">·</span>{project.brand}</span>
                          </span>
                          <ArrowUpRight size={15} className="shrink-0 text-muted transition group-hover:text-terracotta" />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="py-12 text-center">
                      <p className="font-display text-2xl">No projects found.</p>
                      <p className="mt-2 text-sm text-muted">Try another project name, city or developer.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="partner-section" id="partners">
          <div className="section-wrap">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow"><span className="eyebrow-line" /> Good company</p>
                <h2 className="section-title mt-5">Meet the names<br />behind the <em>places.</em></h2>
              </div>
              <p className="max-w-xs text-sm leading-7 text-muted">Working alongside developers whose projects shape the places we call home.</p>
            </div>
            <div className="partner-logos">
              {developers.map((developer) => (
                <div className="partner-logo" key={developer.name}>
                  <img src={developer.image} alt="" loading="lazy" />
                  <span>{developer.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-band">
          <div className="about-band-image" />
          <div className="about-band-content">
            <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Local knowledge. Personal guidance.</p>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-[1.12] tracking-[-0.045em] text-white sm:text-5xl">
              Make your next move<br />with a team that <em className="text-sand">knows the place.</em>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
              From the first shortlist to your next site visit, our local team can help you explore the options and ask the right questions.
            </p>
            <a className="button button-light mt-8" href="#contact">Speak with our team <ArrowUpRight size={15} /></a>
          </div>
          <div className="about-band-mark"><Building2 size={26} strokeWidth={1} /><span>SHAGUN<br />ASSOCIATES</span></div>
        </section>

        <section id="contact" className="contact-section section-wrap">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> We&apos;re here to help</p>
              <h2 className="section-title mt-6">Your next move<br />starts with a <em>conversation.</em></h2>
              <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
                Tell us what you&apos;re looking for and where. Our property team will help you explore the next steps.
              </p>
              <a className="contact-email mt-8" href="mailto:sales@shagunassociates.com">
                <span><Mail size={17} strokeWidth={1.7} /> sales@shagunassociates.com</span><ArrowUpRight size={16} />
              </a>
            </div>

            <form className="enquiry-form" onSubmit={prepareEnquiry}>
              <h3>Send us an enquiry</h3>
              <p>Share a few details and your email app will open with your enquiry ready to send.</p>
              <div className="enquiry-form-grid">
                <label>
                  <span>Your name</span>
                  <input type="text" name="name" autoComplete="name" placeholder="Enter your name" required />
                </label>
                <label>
                  <span>Phone number</span>
                  <input type="tel" name="phone" autoComplete="tel" placeholder="+91" required />
                </label>
                <label className="enquiry-form-full">
                  <span>Interested in</span>
                  <select name="interest" defaultValue="" required>
                  <option value="" disabled>Select a project</option>
                    {projects.map((project) => (
                      <option key={project.slug} value={`${project.name} — ${project.city}`}>
                        {project.name} · {project.city}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="enquiry-form-full">
                  <span>How can we help?</span>
                  <textarea name="message" rows={3} placeholder="Tell us what you have in mind" required />
                </label>
              </div>
              <button className="button button-dark mt-5" type="submit">Prepare enquiry <ArrowUpRight size={15} /></button>
            </form>
          </div>
          <div className="office-section">
            <div className="office-section-heading">
              <p className="eyebrow"><span className="eyebrow-line" /> Visit or call</p>
              <h3>Our offices</h3>
            </div>
            <div className="office-grid">
              {offices.map((office) => (
                <article className="office-card" key={office.type}>
                  <div className="mb-6 flex items-center justify-between">
                    <p className="text-xs font-medium uppercase tracking-[0.13em] text-terracotta">{office.type}</p>
                    <MapPin size={16} className="text-muted/60" />
                  </div>
                  <p className="min-h-[54px] text-sm leading-6 text-ink">{office.address}</p>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-line pt-4">
                    {[office.phone, office.secondPhone].map((number) => (
                      <a className="inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-terracotta" href={`tel:+91${number}`} key={number}>
                        <Phone size={12} /> +91 {number}
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="contact-note">
            <span className="flex items-center gap-2"><Check size={14} /> Personal guidance, from first hello to moving day.</span>
            <a href="http://webmail.shagun-associates.com/" target="_blank" rel="noreferrer">Client portal <ArrowUpRight size={13} /></a>
          </div>
        </section>
      </main>
  );
}

export default App;
