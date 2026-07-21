import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import CodingPractice from "./components/CodingPractice";
import Contact from "./components/Contact";
import ScheduleCall from "./components/ScheduleCall";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="relative">
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute top-40 -right-28 h-96 w-96 rounded-full bg-sky-400/14 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-120 w-120 rounded-full bg-fuchsia-400/10 blur-3xl" />
        </div>
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <About />
          <CodingPractice />
          <Contact />
          <ScheduleCall />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
