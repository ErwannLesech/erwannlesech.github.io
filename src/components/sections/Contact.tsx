import emailjs from "@emailjs/browser";
import { Github, Linkedin, Loader2, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Section } from "@/components/SectionWrapper";
import { useLang } from "@/lib/useLang";
import { toast } from "sonner";

const CONTACT_LINKS = [
  { Icon: Github, label: "GitHub", value: "github.com/ErwannLesech", href: "https://github.com/ErwannLesech" },
  { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/erwann-lesech", href: "https://www.linkedin.com/in/erwann-lesech/" },
  { Icon: Mail, label: "Email", value: "lesech.erwann@gmail.com", href: "mailto:lesech.erwann@gmail.com" },
];

export function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setLoading(true);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) {
        toast.success(t("contact.success"));
        setForm({ name: "", email: "", subject: "", message: "" });
        return;
      }
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        { publicKey }
      );
      toast.success(t("contact.success"));
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error(t("contact.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" title={t("contact.title")}>
      <div className="grid md:grid-cols-[2fr_3fr] gap-10 md:items-end">
        <div className="flex flex-col justify-between h-full">
          <div>
            <p className="text-text-secondary leading-relaxed">{t("contact.intro")}</p>
            <div className="mt-5 flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-pill border border-border-subtle bg-bg-card w-fit">
                <span className="size-2 rounded-full bg-green-500" style={{ animation: "pulse-dot 2s ease-out infinite" }} />
                <span className="text-xs text-text-secondary">{t("contact.available")}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-text-secondary px-3">
                <MapPin size={14} /> {t("contact.location")}
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {CONTACT_LINKS.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border-subtle bg-bg-card hover:border-[var(--accent)] hover:shadow-[0_0_20px_var(--accent-glow)] transition-all"
              >
                <div className="size-10 rounded-lg bg-bg-secondary flex items-center justify-center" style={{ color: "var(--accent)" }}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium">{label}</p>
                  <p className="text-xs text-text-secondary text-mono">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border-subtle bg-bg-card p-6 md:p-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label={t("contact.name")}>
              <input value={form.name} onChange={set("name")} className={inputClass} />
            </Field>
            <Field label={t("contact.email")}>
              <input type="email" value={form.email} onChange={set("email")} className={inputClass} />
            </Field>
          </div>
          <div className="mt-4">
            <Field label={t("contact.subject")}>
              <input value={form.subject} onChange={set("subject")} className={inputClass} />
            </Field>
          </div>
          <div className="mt-4">
            <Field label={t("contact.message")}>
              <textarea rows={5} value={form.message} onChange={set("message")} className={inputClass + " resize-none"} />
            </Field>
          </div>
          <button
            onClick={submit}
            disabled={loading}
            className="mt-6 w-full py-3 rounded-pill font-medium text-white inline-flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_24px_var(--accent-glow)] disabled:opacity-60"
            style={{ background: "var(--accent)" }}
          >
            {loading ? <><Loader2 size={16} className="animate-spin" /> {t("contact.sending")}</> : t("contact.send")}
          </button>
        </div>
      </div>
    </Section>
  );
}

const inputClass =
  "w-full bg-bg-secondary border border-border-subtle rounded-lg px-3 py-2.5 text-sm text-text-primary placeholder:text-text-secondary outline-none transition-colors focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-glow)] hover:border-[var(--text-secondary)]";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wider text-text-secondary mb-1.5">{label}</span>
      {children}
    </label>
  );
}
