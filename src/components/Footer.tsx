import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const SOCIALS = [
  { href: "https://github.com/ErwannLesech", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/erwann-lesech/", label: "LinkedIn", Icon: Linkedin },
  { href: "mailto:lesech.erwann@gmail.com", label: "Email", Icon: Mail },
];

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border-subtle py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="size-10 rounded-full border border-border-subtle flex items-center justify-center text-text-secondary hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all hover:shadow-[0_0_20px_var(--accent-glow)]"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
        <p className="text-xs text-text-secondary">{t("footer.rights")}</p>
      </div>
    </footer>
  );
}
