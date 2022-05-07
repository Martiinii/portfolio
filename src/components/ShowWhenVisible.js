import { motion } from "framer-motion"

const ShowWhenVisible = ({ children, variants, duration, delay, className, type }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
                duration: duration ?? .8,
                delay: delay ?? 0,
                type: type ?? "tween"
            }}
            variants={variants ?? {
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: .5 }
            }}
            layout
            className={className ?? ""}
        >
            {children}
        </motion.div>
    )
}

const generateVariable = (i, l) => {
    return typeof i === 'string' ? `${l ? '' : '-'}${i}` : l ? i : -i;
}

const visibleVariants = {
    slideUp: (i, l = true) => {
        return {
            visible: { y: 0, opacity: 1 },
            hidden: { y: generateVariable(i, l), opacity: 0 }
        }
    },

    slideDown: i => {
        return visibleVariants.slideUp(i, false);
    },

    slideRight: (i, l = false) => {
        return {
            visible: { x: 0, opacity: 1 },
            hidden: { x: generateVariable(i, l), opacity: 0 }
        }
    },

    slideLeft: i => {
        return visibleVariants.slideRight(i, true);
    }

}

export { ShowWhenVisible, visibleVariants }