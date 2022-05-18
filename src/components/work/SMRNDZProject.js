import { CSSSkillTag, HTMLSkillTag, JSSkillTag, PHPSkillTag, SQLSkillTag } from "../skills/SkillTag"
import ProjectInformation from "./ProjectInformation"

const SMRNDZProject = ({dir = 0}) => {
    return (
        <ProjectInformation
            title="Smrekówka and Niedźwiedzia Chata"
            path="images/smrndz/"
            images={[
                "1.webp",
                "2.webp",
                "3.webp",
                "4.webp",
                "5.webp",
            ]}
            skills={[
                <HTMLSkillTag />,
                <CSSSkillTag />,
                <JSSkillTag />,
                <PHPSkillTag />,
                <SQLSkillTag />,
            ]}
            direction={dir}
        >
            <p>Website with information about two houses for rent. Includes an easy-to-use booking system with administration panel to manage reservations.</p>
        </ProjectInformation>
    )
}

export default SMRNDZProject;