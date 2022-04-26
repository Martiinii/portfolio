import Breaker from "./components/Breaker";
import H2 from "./components/headers/H2";
import LegendItem from "./components/skills/LegendItem";
import MainHeader from "./components/headers/MainHeader";
import Navbar from "./components/Navbar";
import ScrollDownArrow from "./components/headers/ScrollDownArrow";
import { ShowWhenVisible, visibleVariants } from "./components/ShowWhenVisible";
import TechGroups from "./components/skills/TechGroups";
import FancyText from "./components/about/FancyText";
import WavyText from "./components/about/WavyText";

function App() {
  return (
    <main>
      <Navbar />
      <section className="bg-primary min-h-screen pt-40 flex flex-col gap-20 justify-between">
        <MainHeader />
        <ScrollDownArrow />
      </section>

      <section className="bg-secondary min-h-screen" id="about">
        <H2>About me</H2>
        <article className="max-w-4xl text-lg">
          <ShowWhenVisible delay={.5} variants={visibleVariants.slideRight("100%")} type="spring" duration={1.5}>
            <p>I am a Full-Stack Web Developer from Poland. <span className="whitespace-nowrap">I mainly</span> do the Front-End, less often the Back-End. <span className="whitespace-nowrap">I love</span> minimalist and modern websites.</p>
          </ShowWhenVisible>

          <ShowWhenVisible delay={.8} variants={visibleVariants.slideRight("100%")} type="spring" duration={1.5}>
            <p className="leading-10"><FancyText>UI / UX</FancyText> is my top priority.</p>
            <p className="leading-7"><WavyText>Animations</WavyText> that complement the content are on the second place.</p>
          </ShowWhenVisible>

          <ShowWhenVisible delay={1.1} variants={visibleVariants.slideRight("100%")} type="spring" duration={1.5}>
            <p>I am eager to learn new technologies and <span className="whitespace-nowrap">I willingly</span> study new topics that interest me. <span className="whitespace-nowrap">I can</span> spend hours upon new things, thoroughly analyzing how they work under the hood. <span className="whitespace-nowrap">I pay</span> a lot of attention to optimizing and organizing the code.</p>
            <p>My interests are astronomy, rockets, astrophotography and Rubik’s cubes.</p>
          </ShowWhenVisible>
        </article>
      </section>

      <section className="bg-primary min-h-screen" id="skills">
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
