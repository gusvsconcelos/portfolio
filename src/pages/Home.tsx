import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import Projects from "../components/layout/Projects";
import About from "../components/layout/About";
import Contact from "../components/layout/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
