export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-white/60">
        <span>© 2026 Dinesh Sharma. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="https://github.com/dinesh0126" className="hover:text-white">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dinesh-sharma-"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a href="https://wa.me/917015190602" className="hover:text-white">
            WhatsApp
          </a>
          <a href="mailto:dineshgarig@gmail.com" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
