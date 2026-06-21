import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Section } from "@/components/SectionWrapper";

export function About() {
  const { t } = useTranslation();
  const bio = t("about.bio", { returnObjects: true }) as string[];
  return (
    <Section id="about" title={t("about.title")}>
      <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start gap-5"
        >
          <div
            className="relative rounded-2xl overflow-hidden p-[2px]"
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--sky))",
              transform: "rotate(-1deg)",
            }}
          >
            <div className="rounded-[14px] overflow-hidden bg-bg-card w-[260px] h-[320px] flex items-center justify-center">
              <div
                className="w-full h-full flex items-center justify-center text-6xl font-bold"
                style={{
                  background: "radial-gradient(circle at 30% 30%, var(--accent-glow), transparent 60%)",
                  color: "var(--text-secondary)",
                }}
              >
                EL
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-pill border border-border-subtle bg-bg-card">
            <span className="size-2 rounded-full bg-green-500" style={{ animation: "pulse-dot 2s ease-out infinite" }} />
            <span className="text-xs text-text-secondary">{t("about.openToWork")}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5 text-text-secondary leading-relaxed"
        >
          {bio.map((p, i) => (
            <p key={i} className={i === 0 ? "text-text-primary text-lg" : "text-base"}>
              {p}
            </p>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
