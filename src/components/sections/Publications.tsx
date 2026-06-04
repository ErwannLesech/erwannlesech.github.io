import { motion } from "framer-motion";
import { Section } from "@/components/SectionWrapper";
import { publications, type Publication } from "@/data/publications";
import { useLang } from "@/lib/useLang";

const TYPE_COLOR: Record<Publication["type"], string> = {
  Article: "#38bdf8",
  Rapport: "#f97316",
  "Réflexion IA": "#7c3aed",
  Research: "#059669",
};

const LANG_COLOR: Record<Publication["language"], string> = {
  FR: "#2563eb",
  EN: "#16a34a",
};

function LanguageFlag({ language, label }: { language: Publication["language"]; label: string }) {
  const isFrench = language === "FR";

  return (
    <span className="inline-flex overflow-hidden rounded-[3px] border border-border-subtle" aria-label={label} title={label}>
      <svg viewBox="0 0 24 16" className="h-3.5 w-5" role="img" aria-hidden="true">
        {isFrench ? (
          <>
            <rect width="8" height="16" fill="#1f5aa6" />
            <rect x="8" width="8" height="16" fill="#ffffff" />
            <rect x="16" width="8" height="16" fill="#e03c31" />
          </>
        ) : (
          <>
            <rect width="24" height="16" fill="#012169" />
            <path d="M0 0 L10 0 L24 9 L24 16 L14 16 L0 7 Z" fill="#ffffff" />
            <path d="M24 0 L14 0 L0 9 L0 16 L10 16 L24 7 Z" fill="#ffffff" />
            <path d="M0 0 L24 16 M24 0 L0 16" stroke="#c8102e" strokeWidth="2" />
            <rect x="10" width="4" height="16" fill="#ffffff" />
            <rect y="6" width="24" height="4" fill="#ffffff" />
            <rect x="11" width="2" height="16" fill="#c8102e" />
            <rect y="7" width="24" height="2" fill="#c8102e" />
          </>
        )}
      </svg>
    </span>
  );
}

export function Publications({ embedded = false }: { embedded?: boolean }) {
  const { t, pick } = useLang();

  const content = (
    <>
      <div className="grid md:grid-cols-2 gap-5">
        {publications.map((p, i) => {
          const c = TYPE_COLOR[p.type];
          const lc = LANG_COLOR[p.language];
          const flagLabel = p.language === "FR" ? "French" : "English";
          return (
            <motion.a
              key={p.id}
              href={p.url ?? "#"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="block rounded-2xl border border-border-subtle bg-bg-card p-6 hover:scale-[1.01] hover:shadow-[0_0_24px_var(--accent-glow)] hover:border-[var(--accent)] transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span
                    className="px-2.5 py-0.5 rounded-md text-mono text-xs uppercase"
                    style={{ background: `${c}22`, color: c }}
                  >
                    {p.type}
                  </span>
                  <span
                    className="px-2 py-0.5 rounded-md text-mono text-[10px] uppercase tracking-wide"
                    style={{ background: `${lc}22`, color: lc }}
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <span>{p.language}</span>
                      <LanguageFlag language={p.language} label={flagLabel} />
                    </span>
                  </span>
                </div>
                <span className="text-mono text-xs text-text-secondary">{p.date}</span>
              </div>
              <h3 className="text-lg font-semibold leading-snug">{pick(p.title)}</h3>
              <p className="mt-2 text-sm text-text-secondary line-clamp-5">{pick(p.abstract)}</p>
              <span className="inline-block mt-4 text-sm" style={{ color: "var(--accent)" }}>
                {t("publications.read")}
              </span>
            </motion.a>
          );
        })}
      </div>
    </>
  );

  if (embedded) {
    return (
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-text-primary">
          {t("publications.title")}
        </h3>
        {content}
      </div>
    );
  }

  return (
    <Section id="publications" title={t("publications.title")} fullHeight={false}>
      {content}
    </Section>
  );
}
