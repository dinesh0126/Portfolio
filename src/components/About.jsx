import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: 92 },
  { name: "Node.js", level: 88 },
  { name: "Express.js", level: 85 },
  { name: "MongoDB", level: 84 },
  { name: "PostgreSQL", level: 78 },
  { name: "Redux", level: 80 },
  { name: "Tailwind CSS", level: 90 }
];

export default function About() {
  return (
    <section id="about" className="section-spacing">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            About
          </p>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Building premium digital experiences with clean architecture.
          </h2>
          <p className="text-white/70">
            I design and build modern web applications that feel effortless to
            use. From concept to deployment, I focus on performance, scalable
            architectures, and delightful UI motion.
          </p>
          <div className="glass rounded-3xl p-6">
            <h3 className="font-display text-lg font-semibold">
              Core Expertise
            </h3>
            <p className="mt-3 text-sm text-white/70">
              React.js, Node.js, Express.js, MongoDB, PostgreSQL, Redux, Tailwind
              CSS.
            </p>
          </div>
          <div className="glass rounded-3xl p-6">
            <h3 className="font-display text-lg font-semibold">
              Education & Internship
            </h3>
            <div className="mt-3 space-y-3 text-sm text-white/70">
              <p>BCA — Chaudhary Bansi Lal University, Bhiwani, Haryana</p>
              <p>
                MCA — Guru Jambheshwar University of Science and Technology,
                Hisar, Haryana
              </p>
              <p>Internship — IBM SkillsBuild Program (Frontend Technology)</p>
            </div>
          </div>
        </div>

        <div className="glass rounded-3xl p-6">
          <h3 className="font-display text-lg font-semibold">Skill Depth</h3>
          <div className="mt-6 space-y-5">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between text-sm">
                  <span>{skill.name}</span>
                  <span className="text-white/60">{skill.level}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="h-2 rounded-full bg-gradient-to-r from-glow-blue via-glow-pink to-glow-mint"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
