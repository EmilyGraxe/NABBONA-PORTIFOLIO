import { motion } from "framer-motion";

const timeline = [
  {
    year: "2026 — Present",
    role: "Digital Skills Instructor",
    org: "Konexio Africa (DIGIPASS Program) · Through Finn Church Aid",
    desc: "Deliver digital skills, workplace readiness, digital literacy, online communication, productivity tools, internet safety, and professional development training while mentoring learners throughout the program.",
    tags: ["Digital Skills", "Training", "Mentorship"],
  },

  {
    year: "2025 — Present",
    role: "IT & Coding Instructor",
    org: "Finn Church Aid (FCA)",
    desc: "Train students in JavaScript, Node.js, web technologies, and software development while supporting IT operations, conducting assessments, preparing reports, and facilitating digital literacy programs.",
    tags: ["JavaScript", "Node.js", "Education"],
  },

  {
    year: "2025 — Present",
    role: "Freelance Software Developer",
    org: "Self-Employed",
    desc: "Develop full-stack web, desktop, AI, and IoT solutions including property management, inventory systems, attendance platforms, and custom software for businesses and organizations.",
    tags: ["Full Stack", "Python", "Node.js"],
  },

  {
    year: "2024 — 2027",
    role: "Bachelor of Science in Software Engineering",
    org: "Cavendish University Uganda",
    desc: "Currently pursuing a Bachelor's degree in Software Engineering with a 4.5 CGPA, specializing in software architecture, databases, web development, and modern software engineering practices.",
    tags: ["Software Engineering", "4.5 CGPA"],
  },

  {
    year: "2023 — 2024",
    role: "Database Administrator",
    org: "Crown Stores – Sonde",
    desc: "Managed inventory databases, maintained pricing accuracy, optimized database performance, ensured data integrity, and supported daily supermarket operations.",
    tags: ["PostgreSQL", "MySQL", "Database Administration"],
  },

  {
    year: "2023 — Present",
    role: "Professional Certifications",
    org: "Google, University of Michigan, Refactory Academy, Finn Church Aid & Zoho Creator",
    desc: "Earned certifications in Software Engineering, Python, Node.js, Digital Skills, IT Systems, and Professional Development from internationally recognized organizations.",
    tags: ["Python", "Node.js", "Certifications"],
  },
];
export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <span className="section-label">Journey</span>
        <h2 className="section-title">Experience & <em>milestones</em>.</h2>
        <p className="section-sub" style={{ marginBottom: 60 }}>
          A brief timeline of the roles, projects, and achievements that shaped how I build.
        </p>
        <div className="timeline">
          <div className="timeline-line" />
          {timeline.map((t, i) => (
            <motion.div
              key={t.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="timeline-item"
            >
              <div className="timeline-dot" />
              <div className="timeline-card card">
                <div className="timeline-year">{t.year}</div>
                <h3>{t.role}</h3>
                <div className="timeline-org">{t.org}</div>
                <p>{t.desc}</p>
                <div className="timeline-tags">
                  {t.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .timeline { position: relative; padding-left: 40px; }
        .timeline-line { position: absolute; left: 12px; top: 8px; bottom: 8px; width: 1px; background: linear-gradient(180deg, var(--accent) 0%, var(--border) 15%, var(--border) 85%, transparent 100%); }
        .timeline-item { position: relative; margin-bottom: 24px; }
        .timeline-item:last-child { margin-bottom: 0; }
        .timeline-dot { position: absolute; left: -34px; top: 24px; width: 11px; height: 11px; border-radius: 50%; background: var(--bg); border: 2px solid var(--accent); box-shadow: 0 0 12px var(--accent-glow); }
        .timeline-card { padding: 24px 28px; transition: border-color 0.3s, transform 0.3s; }
        .timeline-card:hover { border-color: var(--border-strong); transform: translateX(4px); }
        .timeline-year { font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--accent); margin-bottom: 8px; }
        .timeline-card h3 { font-size: 1.15rem; font-weight: 600; margin-bottom: 4px; }
        .timeline-org { color: var(--text-dim); font-size: 13px; margin-bottom: 12px; }
        .timeline-card p { color: var(--text-dim); font-size: 14px; line-height: 1.6; margin-bottom: 14px; }
        .timeline-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .timeline-tags span { font-size: 11px; padding: 4px 10px; border-radius: 999px; border: 1px solid var(--border); color: var(--text-dim); }
      `}</style>
    </section>
  );
}
