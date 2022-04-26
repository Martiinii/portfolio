import { motion } from "framer-motion";

const WavyText = ({ children }) => {
    const container = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: .07
            }
        }
    }

    const item = {
        animate: {
            scale: [1, 1.2, 1],
            y: [-4, 4, -4],
            rotateZ: [0, -9, 5, 0],
            transition: {
                duration: 1.6,
                repeat: Infinity

            }
        }
    }

    return (
        <motion.span
            className="inline-flex font-semibold text-lg"
            variants={container}
            initial="initial"
            animate="animate"
        >
            {
                children.split('').map((l, i) => {
                    return (
                        <motion.span key={i} variants={item}>
                            {l}
                        </motion.span>
                    );
                })
            }
        </motion.span>
    )
}

export default WavyText;