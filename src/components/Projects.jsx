import { motion } from "framer-motion";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="section-spacing">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              Projects
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              Highlighted work and live deployments.
            </h2>
          </div>
          <a href="#contact" className="btn-secondary">
            Start a Project
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass card-hover group rounded-3xl p-6"
            >
              <div className="relative h-44 overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-sm text-white/80">
                  Live Project
                </div>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">
                {project.title}
              </h3>
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
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl || "#"}
                  className={`btn-secondary ${
                    project.githubUrl ? "" : "pointer-events-none opacity-50"
                  }`}
                >
                  GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
