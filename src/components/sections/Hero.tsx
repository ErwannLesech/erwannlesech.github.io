import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMounted } from "@/hooks/use-mounted";
import { ParticleField } from "./ParticleField";

function Typewriter({ phrases }: { phrases: string[] }) {
  const reduced = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) {
      setText(phrases[idx % phrases.length]);
      return;
    }
    const current = phrases[idx % phrases.length];
    const tick = () => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setIdx((i) => i + 1);
        }
      }
    };
    const speed = deleting ? 25 : 45;
    const id = setTimeout(tick, speed);
    return () => clearTimeout(id);
  }, [text, deleting, idx, phrases, reduced]);

  return (
    <span className="text-text-secondary">
      {text}
      <span className="inline-block w-[2px] h-[1.1em] translate-y-[0.15em] ml-0.5" style={{ background: "var(--accent)", animation: "blink 1s steps(1) infinite" }} />
    </span>
  );
}

export function Hero() {
  const { t } = useTranslation();
  const mounted = useMounted();
  const phrases = t("hero.typewriter", { returnObjects: true }) as string[];

  return (
    <section id="hero" className="relative w-full min-h-screen px-6 pt-24 pb-12 flex items-center overflow-hidden">
      <div className="mx-auto max-w-6xl w-full grid lg:grid-cols-[3fr_2fr] gap-8 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-mono text-xs uppercase tracking-[0.2em] mb-6"
            style={{ color: "var(--accent)" }}
          >
            {t("hero.label")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-[-0.04em] leading-[0.95]"
          >
            {t("hero.firstName")}
            <br />
            <span style={{ color: "var(--accent)" }}>{t("hero.lastName")[0]}</span>
            {t("hero.lastName").slice(1)}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl min-h-[2em]"
          >
            <Typewriter phrases={phrases} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-3 text-sm text-text-secondary"
          >
            {t("hero.tagline")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 rounded-pill font-medium text-white transition-all hover:scale-[1.03] hover:shadow-[0_0_24px_var(--accent-glow)]"
              style={{ background: "var(--accent)" }}
            >
              {t("hero.viewProjects")}
            </a>
            <a
              href="/cv.pdf"
              download
              className="px-6 py-3 rounded-pill font-medium border-2 transition-all hover:text-white inline-flex items-center gap-2"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <Download size={16} />
              {t("hero.downloadCV")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-6 flex items-center gap-2"
          >
            {[
              { href: "https://github.com/ErwannLesech", label: "GitHub", Icon: Github },
              { href: "https://www.linkedin.com/in/erwann-lesech/", label: "LinkedIn", Icon: Linkedin },
              { href: "mailto:lesech.erwann@gmail.com", label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="size-10 rounded-full border border-border-subtle flex items-center justify-center text-text-secondary hover:text-[var(--accent)] hover:border-[var(--accent)] hover:shadow-[0_0_20px_var(--accent-glow)] transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        <div className="hidden lg:block h-[520px] w-full relative">
          {mounted && <ParticleField />}
        </div>
      </div>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary"
        style={{ animation: "bounce-soft 2s ease-in-out infinite" }}
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
