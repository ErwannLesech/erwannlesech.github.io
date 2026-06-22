import { motion } from "framer-motion";
import { ChefHat, Gamepad2, Music, Plane, Waves, Bike } from "lucide-react";
import { Section } from "@/components/SectionWrapper";
import { passions, type Passion } from "@/data/passions";
import { useLang } from "@/lib/useLang";

const ICONS = {
  swim: Waves,
  moto: Bike,
  plane: Plane,
  chef: ChefHat,
  gamepad: Gamepad2,
  music: Music,
};

function TileBg({ kind }: { kind: Passion["bg"] }) {
  const common = "absolute inset-0 pointer-events-none overflow-hidden opacity-[0.07] group-hover:opacity-[0.12] transition-opacity";
  switch (kind) {
    case "wave":
      return (
        <div className={common}>
          <svg viewBox="0 0 200 100" className="absolute inset-0 w-[200%] h-full" style={{ animation: "ripple 8s ease-in-out infinite alternate" }}>
            <path d="M0 50 Q 25 30 50 50 T 100 50 T 150 50 T 200 50" stroke="currentColor" fill="none" strokeWidth="1" />
            <path d="M0 65 Q 25 45 50 65 T 100 65 T 150 65 T 200 65" stroke="currentColor" fill="none" strokeWidth="1" />
            <path d="M0 35 Q 25 15 50 35 T 100 35 T 150 35 T 200 35" stroke="currentColor" fill="none" strokeWidth="1" />
          </svg>
        </div>
      );
    case "speed":
      return (
        <div className={common}>
          <div className="absolute inset-0" style={{
            backgroundImage: "repeating-linear-gradient(115deg, currentColor 0 1px, transparent 1px 18px)",
            animation: "drift 6s linear infinite alternate",
          }} />
        </div>
      );
    case "cloud":
      return (
        <div className={common}>
          <div className="absolute top-1/3 -left-10 w-40 h-10 rounded-full blur-2xl" style={{ background: "currentColor", animation: "drift 14s linear infinite" }} />
        </div>
      );
    case "steam":
      return (
        <div className={common}>
          {[0, 1, 2].map((i) => (
            <div key={i} className="absolute bottom-2 w-3 h-3 rounded-full blur-md" style={{
              left: `${30 + i * 20}%`,
              background: "currentColor",
              animation: `steam ${4 + i}s ease-out ${i * 0.8}s infinite`,
            }} />
          ))}
        </div>
      );
    case "scan":
      return (
        <div className={common}>
          <div className="absolute inset-0" style={{
            backgroundImage: "repeating-linear-gradient(0deg, currentColor 0 1px, transparent 1px 4px)",
          }} />
          <div className="absolute inset-x-0 h-12 blur-md" style={{
            background: "linear-gradient(to bottom, transparent, currentColor, transparent)",
            animation: "scan 5s linear infinite",
          }} />
        </div>
      );
    case "eq":
      return (
        <div className={common}>
          <div className="absolute bottom-4 left-0 right-0 flex items-end justify-around h-16 px-4">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="w-1 rounded-t" style={{
                height: "100%",
                background: "currentColor",
                transformOrigin: "bottom",
                animation: `eq ${1.6 + (i % 4) * 0.3}s ease-in-out ${i * 0.08}s infinite`,
              }} />
            ))}
          </div>
        </div>
      );
  }
}

export function OutsideTheCode() {
  const { t, pick } = useLang();
  return (
    <Section
      id="outside"
      title={t("passions.title")}
      subtitle={t("passions.subtitle")}
      fullHeight={false}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {passions.map((p, i) => {
          const Icon = ICONS[p.icon];
          const color = p.accent === "orange" ? "var(--accent)" : "var(--sky)";
          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group relative aspect-square rounded-2xl border border-border-subtle bg-bg-card p-6 overflow-hidden transition-all hover:border-[var(--accent)] hover:shadow-[0_0_24px_var(--accent-glow)]"
              style={{ color }}
            >
              <TileBg kind={p.bg} />
              <div className="relative h-full flex flex-col">
                <Icon size={36} className="transition-transform group-hover:scale-110" style={{ color }} />
                <h3 className="mt-4 text-base font-semibold text-text-primary">{pick(p.label)}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{pick(p.description)}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
