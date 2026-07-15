import { motion } from "framer-motion";

export default function Background() {
  return (
    <div aria-hidden className="bg-wrap">
      <div className="bg-grid" />
      <motion.div
        className="bg-orb bg-orb-1"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bg-orb bg-orb-2"
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="bg-noise" />
      <style>{`
        .bg-wrap { position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; background: radial-gradient(1200px 700px at 75% -10%, rgba(16,185,129,0.18), transparent 60%), radial-gradient(1000px 600px at 10% 20%, rgba(139,92,246,0.08), transparent 55%), #050505; }
        .bg-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px); background-size: 60px 60px; mask-image: radial-gradient(ellipse at 50% 0%, #000 30%, transparent 75%); }
        .bg-orb { position: absolute; width: 520px; height: 520px; border-radius: 50%; filter: blur(90px); opacity: 0.35; }
        .bg-orb-1 { top: -160px; right: -120px; background: radial-gradient(circle, #10b981, transparent 70%); }
        .bg-orb-2 { bottom: -200px; left: -160px; background: radial-gradient(circle, #6366f1, transparent 70%); opacity: 0.25; }
        .bg-noise { position: absolute; inset: 0; opacity: 0.035; mix-blend-mode: overlay; background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.9'/></svg>"); }
        .app > *:not([aria-hidden]) { position: relative; z-index: 1; }
      `}</style>
    </div>
  );
}
