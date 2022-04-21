import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const LevelDot = ({ level }) => {
    let color;

    switch (level) {
        case 1:
            color = "text-emerald-500";
            break;
        case 2:
            color = "text-sky-600";
            break;
        default:
            color = "text-pink-500";
            break;
    }

    return (
        <FontAwesomeIcon icon={faCircle} className={`text-xs ${color}`} />
    )
}

const SkillTag = (value, level) => {
    return (
        <motion.div
            className="flex gap-2 items-center uppercase font-mono text-sm font-semibold bg-zinc-300 text-neutral-700 px-2 py-1 rounded-lg"
            whileHover={{y: 5}}
            layout
        >
            <LevelDot level={level} />
            {value}
        </motion.div>
    );
}

// Levels
// 1: Good knowledge
// 2: Basic knowledge
// 3: Still learning, new technology for me

const JSSkillTag = () => SkillTag("JS", 1);
const CSSSkillTag = () => SkillTag("CSS", 1);
const HTMLSkillTag = () => SkillTag("HTML", 1);

const ReactSkillTag = () => SkillTag("React.js", 1);
const NextSkillTag = () => SkillTag("Next.js", 2);

const TailwindSkillTag = () => SkillTag("Tailwind CSS", 1)
const FramerMotionSkillTag = () => SkillTag("Framer Motion", 2);

const FirebaseSkillTag = () => SkillTag("Firebase", 3)


export {
    JSSkillTag,
    CSSSkillTag,
    HTMLSkillTag,
    ReactSkillTag,
    NextSkillTag,
    TailwindSkillTag,
    FramerMotionSkillTag,
    FirebaseSkillTag,

}
