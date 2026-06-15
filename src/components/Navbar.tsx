import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { setLang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const SECTIONS = ["about", "skills", "experience", "projects", "humanly", "contact"] as const;
const OBSERVED_SECTIONS = ["about", "skills", "experience", "projects", "publications", "humanly", "contact"] as const;
const ACTIVE_SECTION_MAP: Partial<Record<(typeof OBSERVED_SECTIONS)[number], (typeof SECTIONS)[number]>> = {
  publications: "projects",
};

export function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const lang = i18n.language?.startsWith("en") ? "en" : "fr";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      let current = "";
      for (const id of OBSERVED_SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= window.innerHeight * 0.4 && r.bottom > window.innerHeight * 0.4) {
          current = ACTIVE_SECTION_MAP[id] ?? id;
          break;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-md bg-bg-primary/80 border-b border-border-subtle" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => go("hero")}
          aria-label="Home"
          className="text-mono text-lg font-bold tracking-tight"
          style={{ color: "var(--accent)" }}
        >
          EL<span className="text-text-primary">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {SECTIONS.map((id) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="relative px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {t(`nav.${id}`)}
              {active === id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-3 right-3 -bottom-px h-[2px]"
                  style={{ background: "var(--accent)" }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center text-mono text-xs border border-border-subtle rounded-pill overflow-hidden">
            {(["fr", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-label={`Switch to ${l.toUpperCase()}`}
                className={cn(
                  "px-3 py-1.5 uppercase transition-colors",
                  lang === l ? "text-white" : "text-text-secondary hover:text-text-primary"
                )}
                style={lang === l ? { background: "var(--accent)" } : undefined}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="size-9 rounded-full border border-border-subtle flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-[var(--accent)] transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="md:hidden size-9 rounded-full border border-border-subtle flex items-center justify-center"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-bg-primary border-t border-border-subtle"
          >
            <div className="flex flex-col p-4 gap-1">
              {SECTIONS.map((id) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className="text-left px-3 py-3 text-base text-text-primary hover:text-[var(--accent)] transition-colors"
                >
                  {t(`nav.${id}`)}
                </button>
              ))}
              <div className="flex gap-2 mt-2 px-3">
                {(["fr", "en"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={cn(
                      "px-3 py-1.5 text-xs uppercase rounded-pill border border-border-subtle",
                      lang === l && "text-white border-transparent"
                    )}
                    style={lang === l ? { background: "var(--accent)" } : undefined}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
