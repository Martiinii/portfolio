import { ReactSkillTag, TailwindSkillTag } from "../skills/SkillTag"
import ProjectInformation from "./ProjectInformation"

const TailwindColorsProject = ({ dir = 0 }) => {
    return (
        <ProjectInformation
            title="Tailwind CSS Colors"
            date="April 2022"
            path="images/tailwindcolors/"
            images={[
                "1.webp"
            ]}
            skills={[
                <ReactSkillTag />,
                <TailwindSkillTag />
            ]}
            externalLink="https://martiinii.github.io/tailwindcolors/"
            githubLink="https://github.com/Martiinii/tailwindcolors"

            direction={dir}
        >
            <p>Website that displays every color from Tailwind CSS. Clicking on a color copies its value. Built-in text to preview your color combo.</p>
        </ProjectInformation>
    )
}

export default TailwindColorsProject;