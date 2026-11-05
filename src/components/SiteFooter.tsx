import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <>
      <footer className="footer">
        <div className="section-wrap">
          <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <Link to="/" className="brand-lockup brand-lockup-light">
                <span className="brand-monogram">S<span>.</span></span>
                <span className="brand-name"><span>SHAGUN</span><span>ASSOCIATES</span></span>
              </Link>
              <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">A thoughtful approach to finding the right place, across Uttar Pradesh.</p>
            </div>
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/70">
              <Link to="/#about" className="footer-link">About us</Link>
              <Link to="/#projects" className="footer-link">Projects</Link>
              <Link to="/#partners" className="footer-link">Our partners</Link>
              <Link to="/#contact" className="footer-link">Contact</Link>
            </nav>
          </div>
          <div className="flex flex-col justify-between gap-3 pt-5 text-xs tracking-wide text-white/50 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Shagun Associates. All rights reserved.</p>
            <a href="mailto:sales@shagunassociates.com" className="transition hover:text-white/80">Made for finding your place.</a>
          </div>
        </div>
      </footer>
      <Link to="/#contact" className="floating-contact" aria-label="Contact Shagun Associates"><Phone size={17} /></Link>
    </>
  );
}
