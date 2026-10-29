import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export const metadata = {
  title: "Thiago Amaral | Engenheiro de Software",
  description:
    "Portfólio de Thiago Amaral, engenheiro de software com experiência em Java, Spring, AWS e desenvolvimento de sistemas.",
};
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
