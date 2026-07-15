import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-brand">Nabbona <span>Emirina</span></div>
            <p>Engineering intelligent software with AI, full-stack development, DevOps, and cloud technologies.</p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Navigate</h4>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
            </div>
            <div>
              <h4>Connect</h4>
              <a href="mailto:graxeemily@gmail.com">Email <ArrowUpRight size={12} /></a>
              <a href="https://github.com/EmilyGraxe" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} /></a>
              <a href="https://www.linkedin.com/in/emirina-nabbona-2a4558361?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={12} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter <ArrowUpRight size={12} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Emirina. All rights reserved.</span>
          <div className="footer-social">
            <a href="https://github.com/EmilyGraxe" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a>
            <a href="https://www.linkedin.com/in/emirina-nabbona-2a4558361?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={16} /></a>
          </div>
        </div>
      </div>
      <style>{`
        .footer { padding: 60px 0 40px; border-top: 1px solid var(--border); margin-top: 40px; }
        .footer-top { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; padding-bottom: 40px; border-bottom: 1px solid var(--border); }
        .footer-brand { font-family: var(--font-display); font-size: 1.8rem; margin-bottom: 8px; }
        .footer-brand span { color: var(--accent); }
        .footer-top p { color: var(--text-dim); font-size: 14px; max-width: 320px; }
        .footer-links { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .footer-links h4 { font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-mute); margin-bottom: 16px; }
        .footer-links a { display: flex; align-items: center; gap: 4px; padding: 5px 0; font-size: 14px; color: var(--text-dim); transition: color 0.2s; }
        .footer-links a:hover { color: var(--accent); }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 24px; font-size: 12.5px; color: var(--text-mute); }
        .footer-social { display: flex; gap: 14px; }
        .footer-social a { color: var(--text-mute); transition: color 0.2s; }
        .footer-social a:hover { color: var(--accent); }
        @media (max-width: 780px) { .footer-top { grid-template-columns: 1fr; gap: 40px; } .footer-bottom { flex-direction: column; gap: 14px; } }
      `}</style>
    </footer>
  );
}
