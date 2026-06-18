import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import Process from "../components/Process";
import Projects from "../components/Projects";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Expertise />
      <Process />
      <Projects />
      <Stats />
      <Footer />
    </>
  );
}