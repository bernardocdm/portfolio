import Hero from "@/sections/Hero";
import { About } from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import { Navbar } from "./layout/navbar";
import GreenDots from "./components/GreenDots";
import { Footer } from "./layout/footer"
// import { useTranslation } from "react-i18next";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="relative">
        <GreenDots />
        <div className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default App;
