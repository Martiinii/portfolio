import { motion } from "framer-motion";
import H2 from "../headers/H2";
import { ShowWhenVisible, visibleVariants } from "../ShowWhenVisible";
import FancyText from "../about/FancyText"
import WavyText from "../about/WavyText"

const About = () => {
    return (
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
                    whileHover={{ scale: 1.03, rotateZ: "1deg" }}
                    whileTap={{ scale: 1.03, rotateZ: "1deg" }}
                />
            </ShowWhenVisible>
        </section>
    )
}

export default About;