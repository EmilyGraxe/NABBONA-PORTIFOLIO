import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`nav ${scrolled ? "nav-scrolled" : ""}`}
    >
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">N</span>
          <span className="brand-name"><span className="brand-dot">Nabbona</span> Emirina</span>
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-ghost nav-cta">Let's talk</a>
        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="nav-mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </motion.div>
      )}
      <style>{`
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 50; transition: all 0.3s ease; padding: 18px 0; }
        .nav-scrolled { background: rgba(5,5,5,0.7); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); padding: 12px 0; }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .brand { display: flex; align-items: center; gap: 10px; font-weight: 600; letter-spacing: -0.01em; }
        .brand-mark { width: 32px; height: 32px; display: grid; place-items: center; border-radius: 8px; background: linear-gradient(135deg, var(--accent), #059669); color: #04120c; font-weight: 800; font-size: 14px; }
        .brand-name { font-size: 15px; }
        .brand-dot { color: var(--accent); }
        .nav-links { display: flex; gap: 32px; }
        .nav-link { font-size: 14px; color: var(--text-dim); position: relative; transition: color 0.2s; }
        .nav-link:hover { color: var(--text); }
        .nav-link::after { content: ""; position: absolute; left: 0; bottom: -6px; width: 0; height: 1px; background: var(--accent); transition: width 0.3s; }
        .nav-link:hover::after { width: 100%; }
        .nav-cta { padding: 10px 20px; font-size: 13px; }
        .nav-burger { display: none; color: var(--text); }
        .nav-mobile { display: none; }
        @media (max-width: 860px) {
          .nav-links, .nav-cta { display: none; }
          .nav-burger { display: block; }
          .nav-mobile { display: flex; flex-direction: column; gap: 8px; padding: 20px 28px; background: rgba(5,5,5,0.95); border-top: 1px solid var(--border); backdrop-filter: blur(20px); }
          .nav-mobile a { padding: 10px 0; color: var(--text-dim); border-bottom: 1px solid var(--border); }
        }
      `}</style>
    </motion.header>
  );
}
