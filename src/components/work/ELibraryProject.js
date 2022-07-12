import { JSSkillTag, NextSkillTag, TailwindSkillTag } from "../skills/SkillTag";
import ProjectInformation from "./ProjectInformation"

const ELibraryProject = ({dir = 0}) => {
    return (
        <ProjectInformation
            title="E-Library"
            date="May 2022"
            path="images/elibrary/"
            images={[
                "1.webp",
                "2.webp",
                "3.webp",
                "4.webp",
            ]}
            skills={[
                <NextSkillTag />,
                <TailwindSkillTag />,
                <JSSkillTag />
            ]}
            externalLink="https://elibrary.martiinii.dev"
            githubLink="https://github.com/Martiinii/eLibrary"

            direction={dir}
        >
            <p>Web application for searching and reading books from <a className="link" href="https://www.gutenberg.org">Project Gutenberg</a>.</p>
            <p>Books can be saved for later reading. Included search bar with filters.</p>
        </ProjectInformation>
    )
}

export default ELibraryProject;