import { LevelDot } from "./SkillTag";

const LegendItem = ({level, title}) => {
    return (
        <span className="flex gap-2 items-center">
            <LevelDot level={level} />
            {title}
        </span>
    )
}

export default LegendItem;