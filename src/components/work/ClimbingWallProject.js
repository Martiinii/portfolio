import { CSSSkillTag, ElectronSkillTag, HTMLSkillTag, JSSkillTag, SQLSkillTag } from "../skills/SkillTag"
import ProjectInformation from "./ProjectInformation"

const ClimbingWallProject = ({dir = 0}) => {
    return (
        <ProjectInformation
            title="Software for wall climbing business"
            path="images/mf/"
            images={[
                "1.webp",
                "2.webp",
                "3.webp",
                "4.webp",
                "5.webp",
                "6.webp",
            ]}
            skills={[
                <HTMLSkillTag />,
                <CSSSkillTag />,
                <JSSkillTag />,
                <SQLSkillTag />,
                <ElectronSkillTag />
            ]}
            
            direction={dir}
        >
            <p>Electron based app for managing people. Build-in keyboard shortcuts to increase work speed.</p>
        </ProjectInformation>
    )
}

export default ClimbingWallProject;