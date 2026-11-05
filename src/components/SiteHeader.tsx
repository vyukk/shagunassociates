import { useState } from "react";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navigation = [
  ["Home", "/#home"],
  ["About us", "/#about"],
  ["Projects", "/#projects"],
  ["Our partners", "/#partners"],
  ["Contact", "/#contact"],
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <div className="topline">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] sm:px-8 lg:px-14">
          <span className="hidden sm:inline">Property guidance across Uttar Pradesh</span>
          <a className="ml-auto inline-flex items-center gap-2 transition hover:text-terracotta" href="mailto:sales@shagunassociates.com">
            <Mail size={12} /> sales@shagunassociates.com
          </a>
        </div>
      </div>

      <header className="relative z-30 bg-paper/95">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-14">
          <Link to="/" aria-label="Shagun Associates home" className="brand-lockup" onClick={closeMenu}>
            <span className="brand-monogram">S<span>.</span></span>
            <span className="brand-name">
              <span>SHAGUN</span>
              <span>ASSOCIATES</span>
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
            {navigation.map(([label, href]) => <Link className="nav-link" to={href} key={label}>{label}</Link>)}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a href="http://webmail.shagun-associates.com/" target="_blank" rel="noreferrer" className="text-sm font-medium text-muted transition hover:text-ink">Client login</a>
            <Link to="/#contact" className="button button-dark">
              Let&apos;s talk <ArrowUpRight size={14} />
            </Link>
          </div>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-line lg:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav aria-label="Mobile navigation" className="mobile-menu lg:hidden">
            {navigation.map(([label, href]) => (
              <Link key={label} to={href} onClick={closeMenu}>{label}<ArrowUpRight size={16} /></Link>
            ))}
            <a href="http://webmail.shagun-associates.com/" target="_blank" rel="noreferrer" onClick={closeMenu}>Client login<ArrowUpRight size={16} /></a>
          </nav>
        )}
      </header>
    </>
  );
}
