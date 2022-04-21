import H2 from "./components/H2";
import MainHeader from "./components/MainHeader";
import Navbar from "./components/Navbar";
import ScrollDownArrow from "./components/ScrollDownArrow";
import TechGroup from "./components/TechGroup";

function App() {
  return (
    <main>
      <Navbar />
      <section className="bg-primary min-h-screen pt-40 flex flex-col gap-20 justify-between">
        <MainHeader />
        <ScrollDownArrow />
      </section>

      <section className="bg-secondary min-h-screen">
        <H2>Technologies I use</H2>
        <div className="grid grid-cols-3 gap-5 max-w-4xl mx-auto">
          <TechGroup title="Front end" />
          <TechGroup title="Back end" />
          <TechGroup title="Others"/>
        </div>
      </section>
    </main>
  );
}

export default App;
