import Breaker from "./components/Breaker";
import H2 from "./components/headers/H2";
import LegendItem from "./components/skills/LegendItem";
import MainHeader from "./components/headers/MainHeader";
import Navbar from "./components/Navbar";
import ScrollDownArrow from "./components/headers/ScrollDownArrow";
import { ShowWhenVisible, visibleVariants } from "./components/ShowWhenVisible";
import TechGroups from "./components/skills/TechGroups";

function App() {
  return (
    <main>
      <Navbar />
      <section className="bg-primary min-h-screen pt-40 flex flex-col gap-20 justify-between">
        <MainHeader />
        <ScrollDownArrow />
      </section>

      <section className="bg-secondary min-h-screen" id="skills">
        <ShowWhenVisible variants={visibleVariants.slideDown(50)} delay={.5}>
          <H2>Technologies I use</H2>
        </ShowWhenVisible>

        <ShowWhenVisible delay={.6} className="grid gap-5 justify-center items-center max-w-4xl mx-auto">
          <TechGroups />
          <Breaker className="mt-10" />

          <div>
            <LegendItem title="Good knowledge" level={1} />
            <LegendItem title="Basic knowledge" level={2} />
            <LegendItem title="Still learning" level={3} />
          </div>

        </ShowWhenVisible>

      </section>
    </main>
  );
}

export default App;
