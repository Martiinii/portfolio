import { motion } from "framer-motion"

const SmallText = ({ children, variants, className }) => {

    return (
        <motion.div
            className={`header-st ${className ?? ""}`}
            variants={variants}

            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="hover"
        >
            {children}
        </motion.div>
    )
}

const LeftVariant = (delay) => {
    return {
        initial: {
            x: "-200%",
            y: "-25%",
        },
        animate: {
            x: 0,
            transition: {
                delay: delay,
                duration: 1.3,
                type: "spring",
                bounce: .4
            }
        },
        hover: {
            scale: 1.1,
            y: "-40%",
        }


    }
}

const RightVariant = (delay) => {
    return {
        initial: {
            x: "200%",
            y: "25%",
        },
        animate: {
            x: -36,
            transition: {
                delay: delay,
                duration: 1.3,
                type: "spring",
                bounce: .4
            }
        },
        hover: {
            scale: 1.1,
            y: "40%"
        }
    }
}

export { SmallText, LeftVariant, RightVariant }