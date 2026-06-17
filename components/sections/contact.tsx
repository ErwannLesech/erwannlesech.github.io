"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { Github, Linkedin, Mail, Send } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"

const socials = [
  { id: "github", href: "https://github.com/ErwannLesech", icon: Github, label: "GitHub" },
  { id: "linkedin", href: "https://www.linkedin.com/in/erwann-lesech", icon: Linkedin, label: "LinkedIn" },
  { id: "email", href: "mailto:erwann.lesech@example.com", icon: Mail, label: "Email" },
]

export function Contact() {
  const { t } = useTranslation()
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    // Simulate a request; wire to a real endpoint or email service as needed.
    await new Promise((resolve) => setTimeout(resolve, 900))
    setSending(false)
    ;(e.target as HTMLFormElement).reset()
    toast.success(t("contact.form.success"))
  }

  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="06" title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {t("contact.social")}
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="font-medium text-foreground">{s.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="name" label={t("contact.form.name")} />
              <Field id="email" label={t("contact.form.email")} type="email" />
            </div>
            <div className="mt-4">
              <Field id="subject" label={t("contact.form.subject")} />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <Button type="submit" disabled={sending} className="mt-5 w-full sm:w-auto">
              {sending ? (
                t("contact.form.sending")
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {t("contact.form.send")}
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type = "text",
}: {
  id: string
  label: string
  type?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  )
}
