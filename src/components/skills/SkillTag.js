import { faCircle, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const LevelDot = ({ level, icon, overrideColor }) => {
    let color;

    if (overrideColor) {
        color = overrideColor;
    } else {
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
    }

    return (
        <FontAwesomeIcon icon={icon} className={`text-xs ${color}`} />
    )
}

const SkillTag = (value, level, icon = faCircle, color) => {
    return (
        <motion.div
            className="flex gap-2 items-center uppercase font-mono font-semibold bg-stone-200 text-neutral-700 px-2 py-1 rounded-lg shadow-md shadow-neutral-400/50"
            whileHover={{ y: 5 }}
            whileTap={{ y: 5 }}
            layout
        >
            <LevelDot level={level} icon={icon} overrideColor={color} />
            {value}
        </motion.div>
    );
}

// Levels
// 1: Good knowledge
// 2: Basic knowledge
// 3: Still learning, new technology for me

// Base
const JSSkillTag = () => SkillTag("JavaScript", 1);
const TSSkillTag = () => SkillTag("TypeScript", 2)
const CSSSkillTag = () => SkillTag("CSS", 1);
const HTMLSkillTag = () => SkillTag("HTML", 1);

// General Front-end / Back-end
const ReactSkillTag = () => SkillTag("React.js", 1);
const NextSkillTag = () => SkillTag("Next.js", 2);
const ExpressSkillTag = () => SkillTag("Express.js", 2);
const PHPSkillTag = () => SkillTag("PHP", 2);
const GatsbySkillTag = () => SkillTag("Gatsby", 2);
const SvelteSkillTag = () => SkillTag("Svelte", 2);

// Front-end frameworks
const TailwindSkillTag = () => SkillTag("Tailwind CSS", 1);
const BootstrapSkillTag = () => SkillTag("Bootstrap", 3);
const FramerMotionSkillTag = () => SkillTag("Framer Motion", 2);
const ThreeSkillTag = () => SkillTag("Three.js", 3)

// Others
const FirebaseSkillTag = () => SkillTag("Firebase", 3);
const NodeSkillTag = () => SkillTag("Node.js", 2);
const GitSkillTag = () => SkillTag("Git", 2);
const FigmaSkillTag = () => SkillTag("Figma", 2);

// Languages
const JavaSkillTag = () => SkillTag("Java", 1);
const PythonSkillTag = () => SkillTag("Python", 2);
const CPPSkillTag = () => SkillTag("C++", 2);

// Databases
const SQLSkillTag = () => SkillTag("SQL", 2);
const MariaDBSkillTag = () => SkillTag("MariaDB", 2);
const MongoDBSkillTag = () => SkillTag("MongoDB", 3);

// Special
const LoveSkillTag = () => SkillTag("Love", 0, faHeart, "text-red-500")



export {
    LevelDot,

    JSSkillTag,
    TSSkillTag,
    CSSSkillTag,
    HTMLSkillTag,

    ReactSkillTag,
    NextSkillTag,
    ExpressSkillTag,
    PHPSkillTag,
    GatsbySkillTag,
    SvelteSkillTag,

    TailwindSkillTag,
    BootstrapSkillTag,
    FramerMotionSkillTag,
    ThreeSkillTag,

    FirebaseSkillTag,
    NodeSkillTag,
    GitSkillTag,
    FigmaSkillTag,

    JavaSkillTag,
    PythonSkillTag,
    CPPSkillTag,

    SQLSkillTag,
    MariaDBSkillTag,
    MongoDBSkillTag,

    LoveSkillTag
}
