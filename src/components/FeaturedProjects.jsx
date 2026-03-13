import { motion } from "framer-motion";
import { featuredProjects } from "../data/projects.js";

export default function FeaturedProjects() {
  return (
    <section id="featured" className="section-spacing">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">
          Featured Projects
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
          Signature builds with premium polish.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass card-hover rounded-3xl p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold">
                  {project.title}
                </h3>
                <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Featured
                </span>
              </div>
              <p className="mt-3 text-sm text-white/70">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-white/60">
                <span className="inline-flex h-2 w-2 rounded-full bg-glow-blue" />
                Available for showcase or demo.
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
