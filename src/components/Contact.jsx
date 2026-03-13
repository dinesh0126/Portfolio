import { useState } from "react";
import { motion } from "framer-motion";

const whatsappNumber = "+917015190602";
const whatsappLink = "https://wa.me/917015190602";
const emailAddress = "dineshgarig@gmail.com";

const socials = [
  { label: "GitHub", href: "https://github.com/dinesh0126" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dinesh-sharma-" },
  { label: "WhatsApp", href: whatsappLink },
  { label: "Email", href: `mailto:${emailAddress}` }
];

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "success" });

  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    window.clearTimeout(showToast.timeoutId);
    showToast.timeoutId = window.setTimeout(() => {
      setToast({ message: "", type: "success" });
    }, 3200);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formspreeId) {
      showToast("Formspree ID missing. Add VITE_FORMSPREE_ID to .env.", "error");
      return;
    }

    setIsSending(true);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        event.currentTarget.reset();
        showToast("Message sent successfully!", "success");
      } else {
        showToast("Something went wrong. Try again.", "error");
      }
    } catch (error) {
      showToast("Network error. Please try again.", "error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr_1.1fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Contact
          </p>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Let’s build something exceptional together.
          </h2>
          <p className="text-white/70">
            Ready to launch your next product? Share the vision and I’ll help
            turn it into a polished, production-ready experience.
          </p>
          <div className="glass rounded-3xl p-5 text-sm text-white/70">
            <p>
              WhatsApp: <a href={whatsappLink} className="text-white">{whatsappNumber}</a>
            </p>
            <p className="mt-2">
              Email: <a href={`mailto:${emailAddress}`} className="text-white">{emailAddress}</a>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-6"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-white/60">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-white/60">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-white/60">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                required
                placeholder="Tell me about your project"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </motion.form>
      </div>

      {toast.message ? (
        <div className="fixed right-6 top-6 z-50">
          <div
            className={`glass rounded-2xl px-4 py-3 text-sm shadow-soft ${
              toast.type === "error" ? "border border-red-400/40 text-red-200" : "border border-emerald-400/40 text-emerald-200"
            }`}
          >
            {toast.message}
          </div>
        </div>
      ) : null}
    </section>
  );
}
