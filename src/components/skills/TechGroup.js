import Breaker from "../Breaker"
import { BootstrapSkillTag, CPPSkillTag, CSSSkillTag, ExpressSkillTag, FigmaSkillTag, FirebaseSkillTag, FramerMotionSkillTag, GatsbySkillTag, GitSkillTag, JavaSkillTag, JSSkillTag, MariaDBSkillTag, MongoDBSkillTag, NextSkillTag, NodeSkillTag, PHPSkillTag, PythonSkillTag, ReactSkillTag, SQLSkillTag, SvelteSkillTag, TailwindSkillTag, ThreeSkillTag } from "./SkillTag"

const TechGroup = ({ title, children }) => {
    return (
        <article>
            <h3 className="text-center font-medium text-lg xs:text-xl whitespace-nowrap">{title}</h3>
            <hr className="border-neutral-500 my-3" />

            <div className="flex flex-col gap-3 mx-auto text-base sm:text-lg">
                {children}
            </div>
        </article>
    )
}

const FrontEndTechGroup = () => {
    return (
        <TechGroup title="Front end">
            <ReactSkillTag />
            <GatsbySkillTag />
            <SvelteSkillTag />

            <Breaker />

            <TailwindSkillTag />
            <CSSSkillTag />
            <BootstrapSkillTag />

            <Breaker />

            <FramerMotionSkillTag />
            <ThreeSkillTag />
        </TechGroup>
    )
}

const BackEndTechGroup = () => {
    return (
        <TechGroup title="Back end">
            <NextSkillTag />
            <ExpressSkillTag />
            <PHPSkillTag />
            <FirebaseSkillTag />

            <Breaker />

            <SQLSkillTag />
            <MariaDBSkillTag />
            <MongoDBSkillTag />
        </TechGroup>
    )
}

const OtherTechGroup = () => {
    return (
        <TechGroup title="Others">
            <JSSkillTag />
            <JavaSkillTag />         
            <PythonSkillTag />
            <CPPSkillTag />

            <Breaker />

            <FigmaSkillTag />
            <NodeSkillTag />
            <GitSkillTag />
        </TechGroup>
    )
}

export { FrontEndTechGroup, BackEndTechGroup, OtherTechGroup }