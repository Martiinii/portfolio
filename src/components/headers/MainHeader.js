import { ShowWhenVisible, visibleVariants } from "../ShowWhenVisible";
import { motion } from 'framer-motion'

const MainHeader = () => {
    const variants = {
        animate: {
            scale: 1.1,
            y: -10,
            rotateZ: -1
        }
    }

    return (
        <header className="header px-10 md:pl-20 lg:pl-30 xl:pl-40 text-4xl xs:text-6xl md:text-5xl lg:text-7xl">
            <ShowWhenVisible variants={visibleVariants.slideDown(50)} delay={.3}>
                <h1 className="mb-10" >I'm <motion.span className="fancy-text" variants={variants} whileHover="animate" whileTap="animate" >Martin</motion.span>,<br />Web developer.</h1>

            <ShowWhenVisible variants={visibleVariants.slideUp(50)} delay={1.1}>
                <p className="font-normal text-xl lg:text-3xl">Front End / Back End</p>
            </ShowWhenVisible>

        </ShowWhenVisible>
        </header >
    )
}

export default MainHeader;