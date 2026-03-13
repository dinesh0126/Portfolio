import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import FeaturedProjects from "./components/FeaturedProjects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <FeaturedProjects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
