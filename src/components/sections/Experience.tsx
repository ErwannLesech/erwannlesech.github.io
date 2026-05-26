import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { Section } from "@/components/SectionWrapper";
import { experiences, type Experience as ExperienceItem } from "@/data/experiences";
import { useLang } from "@/lib/useLang";
import { useTheme } from "@/lib/theme";

function CompanyBadge({ company, logo }: { company: string; logo?: string | { light?: string; dark?: string } }) {
  const [hasImageError, setHasImageError] = useState(false);
  const { theme } = useTheme();
  
  // Déterminer le logo à utiliser selon le type
  let logoUrl: string | undefined;
  if (typeof logo === "string") {
    logoUrl = logo;
  } else if (logo && typeof logo === "object") {
    logoUrl = theme === "dark" ? logo.dark : logo.light;
  }
  
  const shouldShowLogo = Boolean(logoUrl) && !hasImageError;

  return (
    <div className="size-12 rounded-full bg-bg-secondary border border-border-subtle flex items-center justify-center text-mono text-sm shrink-0 overflow-hidden" style={{ color: "var(--accent)" }}>
      {shouldShowLogo ? (
        <img
          src={logoUrl}
          alt={`Logo ${company}`}
          className="size-full object-contain p-1"
          loading="lazy"
          onError={() => setHasImageError(true)}
        />
      ) : (
        company[0]
      )}
    </div>
  );
}

function CountryFlag({ country, label }: { country: ExperienceItem["country"]; label: string }) {
  const isFrance = country === "FR";

  return (
    <span className="inline-flex overflow-hidden rounded-[3px] border border-border-subtle" aria-label={label} title={label}>
      <svg viewBox="0 0 24 16" className="h-3.5 w-5" role="img" aria-hidden="true">
        {isFrance ? (
          <>
            <rect width="8" height="16" fill="#1f5aa6" />
            <rect x="8" width="8" height="16" fill="#ffffff" />
            <rect x="16" width="8" height="16" fill="#e03c31" />
          </>
        ) : (
          <>
            <rect width="8" height="16" fill="#169b62" />
            <rect x="8" width="8" height="16" fill="#ffffff" />
            <rect x="16" width="8" height="16" fill="#ff883e" />
          </>
        )}
      </svg>
    </span>
  );
}

function TimelineItem({ exp, idx, total, progress, isSpotlighted }: { exp: ExperienceItem; idx: number; total: number; progress: any; isSpotlighted: boolean }) {
  const { pick } = useLang();
  const start = idx / total;
  const end = (idx + 1) / total;
  const active = useTransform(progress, (v: number) => (v >= start ? 1 : 0));
  const flagLabel = exp.country === "FR" ? "France" : "Ireland";

  return (
    <div className="relative pl-12 pb-16 last:pb-0">
      <motion.div
        className="absolute left-[14px] top-2 size-4 rounded-full -translate-x-1/2 border-2"
        style={{
          background: "var(--bg-primary)",
          borderColor: useTransform(active, (a) => (a ? "var(--accent)" : "var(--border-subtle)")),
          boxShadow: useTransform(active, (a) => (a ? "0 0 16px var(--accent-glow)" : "none")),
        }}
      />
      <motion.div
        id={`experience-${exp.id}`}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-border-subtle bg-bg-card p-6 hover:border-[var(--accent)] hover:shadow-[0_0_24px_var(--accent-glow)] transition-all"
        style={
          isSpotlighted
            ? {
                borderColor: "var(--accent)",
                boxShadow: "0 0 26px var(--accent-glow)",
              }
            : undefined
        }
      >
        <div className="flex items-start gap-4">
          <CompanyBadge company={exp.company} logo={exp.logo} />
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="text-lg font-semibold">{pick(exp.role)}</h3>
              <span className="text-mono text-xs text-text-secondary">{pick(exp.dates)}</span>
            </div>
            <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm text-text-secondary">{exp.company}</p>
              {exp.contractType && (
                <span
                  className="text-mono text-xs px-2 py-1 rounded-md border text-text-secondary"
                  style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--bg-secondary)" }}
                >
                  {exp.contractType.toUpperCase()}
                </span>
              )}
            </div>
            <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-text-secondary">
                <MapPin size={12} />
                <span>{exp.location}</span>
                <CountryFlag country={exp.country} label={flagLabel} />
            </div>
            {exp.context && (
              <p className="mt-4 border-l-2 pl-3 text-sm leading-relaxed text-text-secondary" style={{ borderColor: "var(--accent)" }}>
                {pick(exp.context)}
              </p>
            )}
            <ul className="mt-4 space-y-2">
              {exp.bullets.map((b, i) => (
                <li key={i} className="text-sm text-text-secondary flex gap-2">
                  <span style={{ color: "var(--accent)" }}>—</span>
                  <span>{pick(b)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {exp.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-mono text-xs px-2.5 py-1 rounded-md border"
                  style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Experience() {
  const { t, pick } = useLang();
  const pros = experiences.filter((e) => e.type === "pro");
  const edus = experiences.filter((e) => e.type === "academic");
  const [spotlightedExperienceId, setSpotlightedExperienceId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const onNavigate = (event: Event) => {
      const customEvent = event as CustomEvent<{ type?: string; id?: string }>;
      const itemType = customEvent.detail?.type;
      const itemId = customEvent.detail?.id;

      if (itemType !== "experiences" || !itemId) return;

      setSpotlightedExperienceId(itemId);

      window.setTimeout(() => {
        document
          .getElementById(`experience-${itemId}`)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 80);

      window.setTimeout(() => {
        setSpotlightedExperienceId((current) => (current === itemId ? null : current));
      }, 2800);
    };

    window.addEventListener("portfolio:navigate-to-item", onNavigate);
    return () => window.removeEventListener("portfolio:navigate-to-item", onNavigate);
  }, []);

  return (
    <Section id="experience" title={t("experience.title")}>
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6">{t("experience.professional")}</h3>
        <div ref={containerRef} className="relative">
          <div className="absolute left-[14px] top-2 bottom-2 w-px bg-border-subtle" />
          <motion.div
            className="absolute left-[14px] top-2 w-px origin-top"
            style={{ height: lineHeight, background: "var(--accent)", boxShadow: "0 0 8px var(--accent-glow)" }}
          />
          {pros.map((exp, i) => (
            <TimelineItem
              key={exp.id}
              exp={exp}
              idx={i}
              total={pros.length}
              progress={scrollYProgress}
              isSpotlighted={spotlightedExperienceId === exp.id}
            />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-6">{t("experience.education")}</h3>
        <div className="grid md:grid-cols-2 gap-5">
          {edus.map((e) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl border border-border-subtle bg-bg-card p-6 hover:border-[var(--accent)] hover:shadow-[0_0_24px_var(--accent-glow)] transition-all"
            >
              <div className="absolute top-4 right-4 flex flex-col items-center gap-1 px-2 py-1.5 rounded-md border border-border-subtle bg-bg-secondary">
                <span className="text-mono text-[10px] font-semibold">{e.country}</span>
                <CountryFlag country={e.country} label={e.country === "FR" ? "France" : "Ireland"} />
              </div>
              <CompanyBadge company={e.company} logo={e.logo} />
              <h4 className="mt-4 text-base font-semibold pr-12">{pick(e.role)}</h4>
              <p className="text-sm text-text-secondary mt-1">{e.company}</p>
              <p className="text-mono text-xs text-text-secondary mt-1">{pick(e.dates)}</p>
              {e.honors && (
                <p className="mt-3 text-sm text-text-secondary">{pick(e.honors)}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
