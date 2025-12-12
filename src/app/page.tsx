import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Services from "./components/Services";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100">
      <main>
        <Navigation />
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
