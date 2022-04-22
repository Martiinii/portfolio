import { ShowWhenVisible, visibleVariants } from "../ShowWhenVisible";
import { motion } from 'framer-motion'
import { LeftVariant, RightVariant, SmallText } from "./SmallText"

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

                    <SmallText variants={LeftVariant(1.1)} className="z-50">Front-End</SmallText>
                    <SmallText variants={RightVariant(1.1)} className="z-10">Back-End</SmallText>

                </ShowWhenVisible>
            </ShowWhenVisible>
        </header >
    )
}

export default MainHeader;