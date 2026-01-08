import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import Process from "../sections/Process";
import Contact from "../sections/Contact";
import Portfolio from "../pages/Portfolio"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      {/* <Projects /> */}
      <Portfolio/>
      <Process />
      <Contact/>
    </>
  );
}
