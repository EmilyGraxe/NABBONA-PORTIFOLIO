import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects-head">
          <div>
            <span className="section-label">Selected work</span>
            <h2 className="section-title">Projects with <em>intent</em>.</h2>
          </div>
          <p className="section-sub" style={{ alignSelf: "end" }}>
            A curated selection of products, tools, and experiments I've designed and built
            over the past few years.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              className="project card"
            >
              <div className="project-media" style={{ background: p.bg }}>
                <div className="project-media-inner">
                  <div className="project-mock">
                    <div className="mock-bar"><span/><span/><span/></div>
                    <div className="mock-body">
                      <div className="mock-title">{p.title}</div>
                      <div className="mock-lines">
                        <div/><div/><div style={{ width: "60%" }}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-body">
                <div className="project-year">{p.year} · {p.type}</div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.stack.map((s) => <span key={s}>{s}</span>)}
                </div>
                <div className="project-links">
                  <a href={p.demo} target="_blank" rel="noreferrer" className="plink">
                    <ExternalLink size={14} /> Live demo
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer" className="plink plink-alt">
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <style>{`
        .projects-head { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 60px; }
        .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .project { overflow: hidden; display: flex; flex-direction: column; transition: transform 0.4s, border-color 0.3s; }
        .project:hover { transform: translateY(-6px); border-color: var(--border-strong); }
        .project-media { aspect-ratio: 16/10; position: relative; overflow: hidden; border-bottom: 1px solid var(--border); }
        .project-media-inner { position: absolute; inset: 0; display: grid; place-items: center; padding: 24px; }
        .project-mock { width: 100%; max-width: 240px; background: rgba(10,10,12,0.85); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 10px; backdrop-filter: blur(8px); box-shadow: 0 20px 40px -20px rgba(0,0,0,0.6); }
        .mock-bar { display: flex; gap: 5px; margin-bottom: 12px; }
        .mock-bar span { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.15); }
        .mock-bar span:first-child { background: #ff5f57; }
        .mock-bar span:nth-child(2) { background: #febc2e; }
        .mock-bar span:nth-child(3) { background: #28c840; }
        .mock-title { font-family: var(--font-display); font-size: 18px; margin-bottom: 10px; color: #fff; }
        .mock-lines div { height: 5px; background: rgba(255,255,255,0.15); border-radius: 3px; margin-bottom: 5px; }
        .project-body { padding: 24px; display: flex; flex-direction: column; gap: 12px; flex: 1; }
        .project-year { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-mute); }
        .project-title { font-size: 1.25rem; font-weight: 600; letter-spacing: -0.01em; }
        .project-desc { color: var(--text-dim); font-size: 14px; line-height: 1.55; flex: 1; }
        .project-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px; }
        .project-tags span { font-size: 11px; padding: 4px 9px; border-radius: 999px; border: 1px solid var(--border); color: var(--text-dim); }
        .project-links { display: flex; gap: 14px; margin-top: 8px; padding-top: 14px; border-top: 1px solid var(--border); }
        .plink { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; color: var(--accent); transition: opacity 0.2s; }
        .plink-alt { color: var(--text-dim); }
        .plink:hover { opacity: 0.75; }
        @media (max-width: 1024px) { .projects-grid { grid-template-columns: 1fr 1fr; } .projects-head { grid-template-columns: 1fr; } }
        @media (max-width: 640px) { .projects-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
