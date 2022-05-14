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
import { SMRNDZProject, TailwindColorsProject, WOMProject } from "./components/work/ProjectInformation"
import FooterBreaker from "./components/footer/FooterBreaker";
import { LoveSkillTag } from "./components/skills/SkillTag";

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
        <article className="max-w-4xl mx-auto">
          <ShowWhenVisible delay={.5} variants={visibleVariants.slideRight(80)} type="spring" duration={1.5}>
            <p>I&nbsp;am a Full-Stack Web Developer from Poland. I&nbsp;mainly do the Front-End, less often the Back-End. I&nbsp;love minimalist and modern websites.</p>
          </ShowWhenVisible>

          <ShowWhenVisible delay={.8} variants={visibleVariants.slideRight(80)} type="spring" duration={1.5}>
            <p className="leading-10"><FancyText>UI / UX</FancyText> is my top priority.</p>
            <p className="leading-7"><WavyText>Animations</WavyText> that complement the content are on the second place.</p>
          </ShowWhenVisible>

          <ShowWhenVisible delay={1.1} variants={visibleVariants.slideRight(80)} type="spring" duration={1.5}>
            <p>I&nbsp;am eager to learn new technologies and I&nbsp;willingly study new topics that interest me. I&nbsp;can spend hours upon new things, thoroughly analyzing how they work under the hood. I&nbsp;pay a lot of attention to optimizing and organizing the code.</p>
            <p>My interests are astronomy, rockets, astrophotography and Rubik's cubes.</p>
          </ShowWhenVisible>
        </article>
      </section>

      <section className="bg-primary min-h-screen" id="skills">
        <H2>Technologies I use</H2>
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

      <section className="bg-secondary min-h-screen p-0" id="work">
        <div className="p-5 sm:p-10">
          <H2>My projects</H2>
          <WOMProject />
          <SMRNDZProject />
          <TailwindColorsProject />
        </div>
        <FooterBreaker />
      </section>

      <footer className="bg-indigo-600 text-yellow-400 font-semibold" id="contact">
        <article className="max-w-4xl mx-auto">
          <H2>Contact me</H2>
          <Breaker color="border-yellow-400" className="my-5" />
          <ShowWhenVisible className="flex gap-3 justify-center items-center">
            <span>Made with</span><LoveSkillTag />
          </ShowWhenVisible>
        </article>
      </footer>

    </main>
  );
}

export default App;
