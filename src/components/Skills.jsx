import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    items: [
      { name: "JavaScript", level: 94 },
      { name: "React", level: 90 },
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 95 },
      { name: "Bootstrap", level: 92 },
      { name: "EJS Templates", level: 88 },
    ],
  },

  {
    title: "Backend",
    items: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 92 },
      { name: "Python", level: 90 },
      { name: "Django", level: 88 },
      { name: "REST APIs", level: 92 },
      { name: "JWT Authentication", level: 90 },
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 82 },
    ],
  },

  {
    title: "Cloud, DevOps & Deployment",
    items: [
      { name: "Git & GitHub", level: 95 },
      { name: "Docker", level: 82 },
      { name: "Kubernetes", level: 72 },
      { name: "AWS", level: 75 },
      { name: "Render", level: 90 },
      { name: "Supabase", level: 92 },
      { name: "Linux CLI", level: 88 },
      { name: "Cloud APIs", level: 85 },
    ],
  },

  {
    title: "Desktop, IoT & Embedded",
    items: [
      { name: "Arduino", level: 82 },
      { name: "ESP32", level: 82 },
      { name: "Embedded Systems", level: 80 },
      { name: "IoT Development", level: 80 },
      { name: "PyInstaller", level: 90 },
      { name: "Inno Setup", level: 88 },
      { name: "Desktop Packaging", level: 88 },
      { name: "Hardware Integration", level: 80 },
    ],
  },

  {
    title: "Design & Engineering",
    items: [
      { name: "Figma", level: 85 },
      { name: "Canva", level: 92 },
      { name: "Penpot", level: 82 },
      { name: "Draw.io", level: 92 },
      { name: "UI/UX Design", level: 88 },
      { name: "ERD Design", level: 90 },
      { name: "System Architecture", level: 85 },
      { name: "Wireframing", level: 88 },
    ],
  },

  {
    title: "Developer Tools & Automation",
    items: [
      { name: "Postman", level: 92 },
      { name: "pgAdmin", level: 90 },
      { name: "VS Code", level: 98 },
      { name: "Twilio API", level: 88 },
      { name: "SMTP Email", level: 90 },
      { name: "n8n", level: 82 },
      { name: "Zapier", level: 80 },
      { name: "Google Workspace", level: 92 },
      { name: "Git CLI", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <span className="section-label">Skills & Stack</span>
        <h2 className="section-title">The <em>tools</em> I build with.</h2>
        <p className="section-sub" style={{ marginBottom: 60 }}>
          A pragmatic, modern stack — chosen for speed, longevity, and developer happiness.
        </p>
        <div className="skills-grid">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="skill-group card"
            >
              <div className="skill-group-head">
                <span className="skill-group-num">0{gi + 1}</span>
                <h3>{g.title}</h3>
              </div>
              <div className="skill-list">
                {g.items.map((it, i) => (
                  <div key={it.name} className="skill-row">
                    <div className="skill-row-top">
                      <span>{it.name}</span>
                      <span className="skill-pct">{it.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${it.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: gi * 0.1 + i * 0.05, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .skill-group { padding: 30px; }
        .skill-group-head { display: flex; align-items: baseline; gap: 12px; margin-bottom: 26px; padding-bottom: 20px; border-bottom: 1px solid var(--border); }
        .skill-group-num { font-family: var(--font-display); color: var(--accent); font-size: 1.4rem; }
        .skill-group h3 { font-size: 1.15rem; font-weight: 600; }
        .skill-list { display: flex; flex-direction: column; gap: 18px; }
        .skill-row-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-size: 13.5px; }
        .skill-pct { color: var(--text-mute); font-size: 11px; letter-spacing: 0.06em; }
        .skill-bar { height: 3px; background: rgba(255,255,255,0.06); border-radius: 3px; overflow: hidden; }
        .skill-bar-fill { height: 100%; background: linear-gradient(90deg, var(--accent), #6ee7b7); border-radius: 3px; }
        @media (max-width: 900px) { .skills-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
