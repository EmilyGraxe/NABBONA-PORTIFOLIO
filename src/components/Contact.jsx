import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send, CheckCircle2 } from "lucide-react";

const EMAIL = "graxeemily@gmail.com";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    // Opens the user's email client with a prefilled message — no backend needed.
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div>
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's build something <em>exceptional</em>.</h2>
          <p className="section-sub">
             I partner with startups, businesses, and organizations to create
            scalable web applications, AI-powered solutions, 
  WhatsApp chatbots, and complete digital platforms. I'm ready to help turn your
  ideas into reliable, high-performance software.
          </p>
          <a href={`mailto:${EMAIL}`} className="contact-email">
            <Mail size={18} /> {EMAIL}
          </a>
          <div className="contact-socials">
            <a href="https://github.com/EmilyGraxe" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/emirina-nabbona-2a4558361?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="https://twitter.com/EmilyGraxe" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={18} /></a>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          className="contact-form card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" required value={form.name} onChange={onChange} placeholder="Your name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="you@company.com" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required rows={5} value={form.message} onChange={onChange} placeholder="Tell me about your project…" />
          </div>
          <button type="submit" className="btn btn-primary contact-submit">
            {sent ? <><CheckCircle2 size={16} /> Sent — check your email</> : <>Send message <Send size={15} /></>}
          </button>
        </motion.form>
      </div>
      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
        .contact-email { display: inline-flex; align-items: center; gap: 10px; margin-top: 32px; padding: 14px 20px; border-radius: 12px; border: 1px solid var(--border-strong); font-size: 15px; transition: all 0.25s; }
        .contact-email:hover { border-color: var(--accent); color: var(--accent); }
        .contact-socials { display: flex; gap: 10px; margin-top: 24px; }
        .contact-socials a { width: 42px; height: 42px; display: grid; place-items: center; border-radius: 10px; border: 1px solid var(--border); color: var(--text-dim); transition: all 0.25s; }
        .contact-socials a:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }
        .contact-form { padding: 32px; display: flex; flex-direction: column; gap: 18px; }
        .field { display: flex; flex-direction: column; gap: 8px; }
        .field label { font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-mute); }
        .field input, .field textarea { padding: 14px 16px; background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 10px; color: var(--text); font-size: 14px; resize: vertical; transition: border-color 0.2s, background 0.2s; }
        .field input:focus, .field textarea:focus { outline: none; border-color: var(--accent); background: rgba(16,185,129,0.04); }
        .contact-submit { align-self: flex-start; margin-top: 6px; }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; gap: 40px; } }
      `}</style>
    </section>
  );
}
