import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import portrait from "../assets/profile.png";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-copy"
        >
          <div className="hero-badge">
            <Sparkles size={13} />
            <span>Available for select engagements</span>
          </div>
          <h1 className="hero-title">
            Building <em>AI powered </em><br />
            web applications<br />
            that solve real problems.
          </h1>
          <p className="hero-sub">
            I'm <strong>Nabbona Emirina</strong>, a full-Stack Developer building mobile applications, WhatsApp chatbots, AI-powered, 
            scalable web applications with clean code, modern technologies, and exceptional user experiences.

          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View my work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              <Mail size={15} /> Contact me
            </a>
          </div>
          <div className="hero-meta">
            <div><span className="num">3+</span><span>Years Experience</span></div>
            <div><span className="num">5+</span><span>Technologies</span></div>
            <div><span className="num">10+</span><span>Projects Built</span></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="hero-visual"
        >
          <div className="hero-frame">
            <img src={portrait} alt="Portrait of Nabbona, full-stack developer" />
            <div className="hero-frame-glow" />
            <div className="hero-frame-tag">
              <div className="dot" />
              <div>
                <div className="tag-title">Nabbona Emirina</div>
                <div className="tag-sub">Full-Stack Developer · AI Engineer</div>
              </div>
            </div>
            <div className="hero-frame-chip">
              <span>AI. Web. Automation.</span>
              <strong>Built to Scale.</strong>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {["AI","React","Devops","Node.js", "JavaScript", "PostgreSQL", "TypeScript", "Next.js", "Python", "AWS", "Django", "Express.js", "HTML5",
    "CSS3","MySQL","MongoDB","REST APIs","Docker","GitHub","Git","Supabase","Render", "CI/CD"].concat(["AI","React","Devops","Node.js", "JavaScript", "PostgreSQL", "TypeScript", "Next.js", "Python", "AWS", "Django", "Express.js", "HTML5",
    "CSS3","MySQL","MongoDB","REST APIs","Docker","GitHub","Git","Supabase","Render", "CI/CD"]).map((t, i) => (
            <span key={i} className="marquee-item">{t}<em>◆</em></span>
          ))}
        </div>
      </div>

      <style>{`
        .hero { padding: 140px 0 60px; position: relative; }
        .hero-inner { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: center; }
        .hero-badge { display: inline-flex; align-items: center; gap: 8px; padding: 7px 14px; border-radius: 999px; border: 1px solid var(--border-strong); background: rgba(16,185,129,0.06); color: var(--accent); font-size: 12px; margin-bottom: 26px; }
        .hero-title { font-family: var(--font-display); font-weight: 400; font-size: clamp(2.4rem, 5vw, 4.4rem); line-height: 1.05; letter-spacing: -0.025em; margin-bottom: 26px; padding-right: 10px; }
        .hero-title em {padding-right: 0.2em; font-style: italic; background: linear-gradient(135deg, #10b981, #6ee7b7); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .hero-sub { color: var(--text-dim); font-size: 1.08rem; max-width: 520px; margin-bottom: 36px; }
        .hero-sub strong { color: var(--text); font-weight: 500; }
        .hero-cta { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 48px; }
        .hero-meta { display: flex; gap: 40px; padding-top: 28px; border-top: 1px solid var(--border); }
        .hero-meta > div { display: flex; flex-direction: column; gap: 4px; }
        .hero-meta .num { font-family: var(--font-display); font-size: 1.8rem; color: var(--text); }
        .hero-meta span:last-child { font-size: 12px; color: var(--text-mute); letter-spacing: 0.06em; text-transform: uppercase; }

        .hero-visual { position: relative; display: flex; justify-content: center; }
        .hero-frame { position: relative; width: 100%; max-width: 440px; aspect-ratio: 4/5; border-radius: 24px; overflow: hidden; border: 1px solid var(--border-strong); background: linear-gradient(180deg, #0f0f11, #050505); box-shadow: var(--shadow-lux); }
        .hero-frame img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
        .hero-frame-glow { position: absolute; inset: -1px; border-radius: 24px; pointer-events: none; background: radial-gradient(400px 200px at 50% 100%, rgba(16,185,129,0.18), transparent 70%); }
        .hero-frame-tag { position: absolute; left: 18px; bottom: 18px; display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 14px; background: rgba(10,10,10,0.7); backdrop-filter: blur(14px); border: 1px solid var(--border-strong); }
        .hero-frame-tag .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 12px var(--accent); }
        .tag-title { font-size: 13px; font-weight: 600; }
        .tag-sub { font-size: 11px; color: var(--text-dim); letter-spacing: 0.04em; }
        .hero-frame-chip { position: absolute; right: 18px; top: 18px; padding: 12px 14px; border-radius: 12px; background: rgba(0,0,0,0.55); backdrop-filter: blur(10px); border: 1px solid var(--border); font-size: 11px; text-align: right; line-height: 1.4; }
        .hero-frame-chip span { color: var(--text-mute); display: block; }
        .hero-frame-chip strong { color: var(--accent); font-weight: 600; }

        .marquee { margin-top: 80px; overflow: hidden; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 22px 0; mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent); }
        .marquee-track { display: flex; gap: 48px; white-space: nowrap; animation: scroll 40s linear infinite; }
        .marquee-item { display: inline-flex; align-items: center; gap: 48px; font-size: 14px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-dim); }
        .marquee-item em { color: var(--accent); font-style: normal; }
        @keyframes scroll { to { transform: translateX(-50%); } }

        @media (max-width: 960px) {
          .hero-inner { grid-template-columns: 1fr; gap: 50px; }
          .hero-visual { order: -1; }
          .hero-frame { max-width: 340px; }
          .hero-meta { gap: 24px; flex-wrap: wrap; }
        }
      `}</style>
    </section>
  );
}
