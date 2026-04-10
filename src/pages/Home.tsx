import Header from "../components/layout/Header";
import Projects from "../components/layout/Projects";
import About from "../components/layout/About";
import Contact from "../components/layout/Contact";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <Header />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}
