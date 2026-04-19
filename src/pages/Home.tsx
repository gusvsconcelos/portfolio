import Header from "../components/layout/Header";
import CurrentlyWorkingOn from "../components/layout/CurrentlyWorkingOn";
import Projects from "../components/layout/Projects";
import About from "../components/layout/About";
import Contact from "../components/layout/Contact";
import ScrollToTop from "../components/ui/ScrollToTop";
import ThemeToggle from "../components/ui/ThemeToggle";

export default function Home() {
  return (
    <>
      <Header />
      <CurrentlyWorkingOn />
      <Projects />
      <About />
      <Contact />
      <ScrollToTop />
      <ThemeToggle />
    </>
  );
}
