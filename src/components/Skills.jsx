import { motion } from "framer-motion";
import { skills } from "../data/projects.js";

const categories = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "tools", label: "Tools" }
];

export default function Skills() {
  return (
    <section id="skills" className="section-spacing">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">
          Skills
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
          The tools that power my builds.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {categories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass card-hover rounded-3xl p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold">
                  {category.label}
                </h3>
                <div className="flex -space-x-2">
                  {[0, 1, 2].map((item) => (
                    <span
                      key={`${category.key}-${item}`}
                      className="h-6 w-6 rounded-full border border-ink-900 bg-gradient-to-br from-glow-blue via-glow-pink to-glow-mint"
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills[category.key].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
