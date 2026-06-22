import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  title,
  subtitle,
  children,
  fullHeight = true,
}: {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  fullHeight?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative w-full px-6 py-24 md:py-32 ${fullHeight ? "min-h-screen" : ""}`}
    >
      <div className="mx-auto max-w-6xl">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em]">{title}</h2>
            {subtitle && (
              <p className="mt-3 text-text-secondary text-base md:text-lg">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
