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
import FooterBreaker from "./components/footer/FooterBreaker";
import { LoveSkillTag } from "./components/skills/SkillTag";
import { FooterEmailLink, FooterGithubLink } from "./components/footer/FooterLink";
import WOMProject from "./components/work/WOMProject"
import SMRNDZProject from "./components/work/SMRNDZProject"
import ClimbingWallProject from "./components/work/ClimbingWallProject"
import TailwindColorsProject from "./components/work/TailwindColorsProject"
import { motion } from "framer-motion";

function App() {
  return (
    <main>
      <Navbar />

      <section className="bg-primary min-h-screen pt-40 flex flex-col gap-20 justify-between">
        <MainHeader />
        <ScrollDownArrow />
      </section>

      <section className="bg-secondary min-h-screen flex flex-col md:flex-row gap-5 overflow-x-hidden" id="about">
        <article className="max-w-4xl mx-auto shrink-[2]">
          <H2>About me</H2>

          <ShowWhenVisible delay={.5} variants={visibleVariants.slideRight(80)} type="spring" duration={1.5}>
            <p>I&nbsp;am a Full-Stack Web Developer from Poland. I&nbsp;mainly do the Front-End, less often the Back-End. I&nbsp;love minimalist and modern websites.</p>
          </ShowWhenVisible>

          <ShowWhenVisible delay={.8} variants={visibleVariants.slideRight(80)} type="spring" duration={1.5}>
            <p className="leading-10"><FancyText>UI / UX</FancyText> is my top priority.</p>
            <p className="leading-7"><WavyText>Animations</WavyText> that complement the content are on the second place.</p>
          </ShowWhenVisible>

          <ShowWhenVisible delay={1.1} variants={visibleVariants.slideRight(80)} type="spring" duration={1.5}>
            <p>I&nbsp;am eager to learn new technologies and I&nbsp;willingly study new topics that interest me. I&nbsp;can spend hours upon new things, thoroughly analyzing how they work under the hood. I&nbsp;pay a lot of attention to optimizing and organizing the code.</p>
            <p>My interests are astronomy, rockets, astrophotography, Rubik's cubes and yoyos.</p>
          </ShowWhenVisible>
        </article>

        <ShowWhenVisible delay={1.5} variants={visibleVariants.slideLeft(80)} className="mx-auto my-auto">
          <motion.img
            className="rounded-xl max-h-[90vh] shadow-lg shadow-black/30"
            src="images/photos/IMG_5451.webp"
            alt="Martin"
            whileHover={{scale: 1.03, rotateZ: "1deg"}}
            whileTap={{scale: 1.03, rotateZ: "1deg"}}
          />
        </ShowWhenVisible>
      </section>

      <section className="bg-primary min-h-screen" id="skills">
        <article className="max-w-4xl mx-auto">
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
        </article>
      </section>

      <section className="bg-secondary min-h-screen p-0" id="work">
        <article className="p-5 sm:p-10">
          <H2>My projects</H2>

          <WOMProject />
          <SMRNDZProject dir={1} />
          <ClimbingWallProject />
          <TailwindColorsProject dir={1} />

        </article>
        <FooterBreaker />
      </section>

      <footer className="bg-indigo-600 text-yellow-300 font-semibold dark:bg-indigo-800 dark:text-amber-300" id="contact">
        <article className="max-w-4xl mx-auto">
          <H2>Find me here</H2>

          <ShowWhenVisible
            className="card w-fit mx-auto text-sm xs:text-lg my-20 dark:bg-none dark:bg-black/30"
            variants={visibleVariants.slideRight(100)}
          >
            <FooterGithubLink />
            <FooterEmailLink />
          </ShowWhenVisible>

          <Breaker color="border-yellow-300 dark:border-amber-300" className="my-5" />

          <ShowWhenVisible className="text-center">
            <span className="flex gap-3 justify-center items-center mb-5">Made with<LoveSkillTag /></span>
            <span className="text-sm">Designed by Marcin Gąsienica-Makowski | 2022</span>
          </ShowWhenVisible>

        </article>
      </footer>

    </main>
  );
}

export default App;
