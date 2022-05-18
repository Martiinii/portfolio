import { FigmaSkillTag, FramerMotionSkillTag, JSSkillTag, NextSkillTag, TailwindSkillTag } from "../skills/SkillTag"
import ProjectInformation from "./ProjectInformation"

const WOMProject = ({dir = 0}) => {
    return (
        <ProjectInformation
            title="Word-o-mat"
            path="images/wom/"
            images={[
                "1.webp",
                "2.webp",
                "3.webp",
                "4.webp",
                "5.webp",
            ]}
            skills={[
                <NextSkillTag />,
                <TailwindSkillTag />,
                <FramerMotionSkillTag />,
                <JSSkillTag />,
                <FigmaSkillTag />,
            ]}
            externalLink="https://wom.martiinii.dev"
            githubLink="https://github.com/Martiinii/word-o-mat"

            direction={dir}
        >
            <p>Web application for learning / revising words or concepts for exams. It doesn't require any account, data is stored in browser's local storage.</p>
            <p>Built in support for multiple lists.</p>
        </ProjectInformation>
    )
}

export default WOMProject;