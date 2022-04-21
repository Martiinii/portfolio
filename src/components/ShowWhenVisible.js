import { motion } from "framer-motion"

const ShowWhenVisible = ({ children, variants, duration, delay, className }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: duration ?? .8, delay: delay ?? 0 }}
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

const visibleVariants = {
    slideUp: i => {
        return {
            visible: { y: 0, opacity: 1 },
            hidden: { y: i, opacity: 0 }
        }
    },
    slideDown: i => {
        return visibleVariants.slideUp(-i);
    }

}

export { ShowWhenVisible, visibleVariants }