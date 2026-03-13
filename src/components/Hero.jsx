import { motion } from "framer-motion";

const floatingItems = ["bg-glow-blue", "bg-glow-pink", "bg-glow-mint"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="animated-gradient absolute inset-0 bg-hero-gradient opacity-80" />
      <div className="absolute inset-0">
        {floatingItems.map((color, index) => (
          <motion.div
            key={color}
            className={`floating absolute h-40 w-40 rounded-full blur-3xl ${color} opacity-30`}
            style={{
              top: `${20 + index * 18}%`,
              left: `${10 + index * 25}%`
            }}
            animate={{ y: [0, -14, 0], x: [0, 10, 0] }}
            transition={{ duration: 8 + index * 2, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-sm uppercase tracking-[0.4em] text-white/60"
        >
          Developer Portfolio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="mt-6 font-display text-4xl font-semibold leading-tight md:text-6xl"
        >
          Dinesh Sharma – <span className="gradient-text">Full Stack Developer</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg text-white/70"
        >
          Specializing in MERN Stack, React, Node.js, and Modern Web Applications.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
