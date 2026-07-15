import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const pillars = [
  { icon: Code2, title: "AI Engineering", desc: "Creating AI-powered applications, intelligent assistants, and WhatsApp chatbots that streamline workflows." },
  { icon: Palette, title: "Full-Stack Development", desc: "Building secure, scalable web applications with modern technologies and clean architecture." },
  { icon: Rocket, title: "Backend & DevOps", desc: "Designing APIs, databases, cloud deployments, CI/CD pipelines, and reliable infrastructure." },
  { icon: Users, title: "Digital Empowerment", desc: "Mentoring developers and delivering practical training, documentation, and technical guidance." },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div>
          <span className="section-label">About</span>
          <h2 className="section-title">Building<em>intelligent</em>software that solves real problems, from idea to deployment.</h2>
          <p className="section-sub">
           I'm a Full-Stack Software Developer passionate about building scalable web
    applications, AI-powered solutions, mobile applications and secure backend systems. I work
    across the entire Software Development Life Cycle (SDLC), from requirements
    analysis and system design to development, testing, deployment, and
    continuous maintenance.
          </p>
          <p className="section-sub" style={{ marginTop: 18 }}>
            My expertise includes full-stack development, backend engineering, Mobile application development, DevOps,
    cloud deployment, database design, REST APIs, AI integration, and WhatsApp
    chatbot development. I build clean, maintainable software that delivers
    real business value while following modern engineering best practices.
          </p>
        </div>
        <div className="pillars">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="pillar card"
            >
              <div className="pillar-icon"><p.icon size={20} /></div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        .pillars { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .pillar { padding: 24px; transition: border-color 0.3s, transform 0.3s; }
        .pillar:hover { border-color: var(--border-strong); transform: translateY(-3px); }
        .pillar-icon { width: 40px; height: 40px; display: grid; place-items: center; border-radius: 10px; background: rgba(16,185,129,0.1); color: var(--accent); margin-bottom: 14px; }
        .pillar h3 { font-size: 1.05rem; font-weight: 600; margin-bottom: 6px; }
        .pillar p { font-size: 13.5px; color: var(--text-dim); line-height: 1.55; }
        @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr; gap: 50px; } .pillars { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 500px) { .pillars { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
