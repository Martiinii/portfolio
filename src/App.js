import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Technologies from "./components/sections/Technologies";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
