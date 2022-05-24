import FooterBreaker from "../footer/FooterBreaker";
import H2 from "../headers/H2";
import ClimbingWallProject from "../work/ClimbingWallProject";
import ELibraryProject from "../work/ELibraryProject";
import SMRNDZProject from "../work/SMRNDZProject";
import TailwindColorsProject from "../work/TailwindColorsProject";
import WOMProject from "../work/WOMProject";

const Projects = () => {
    return (
        <section className="bg-secondary min-h-screen p-0" id="work">
            <article className="p-5 sm:p-10">
                <H2>My projects</H2>

                <WOMProject />
                <ELibraryProject dir={1} />
                <SMRNDZProject />
                <ClimbingWallProject dir={1} />
                <TailwindColorsProject />

            </article>
            <FooterBreaker />
        </section>
    )
}

export default Projects;