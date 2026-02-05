import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import Projects from "../components/layout/Projects";
import Tools from "../components/layout/Tools";
import Callout from "../components/layout/Callout";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Projects />
      <Tools />
      <Callout />
      <Footer />
    </>
  );
}
