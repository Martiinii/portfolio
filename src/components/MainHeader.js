import { ShowWhenVisible, visibleVariants } from "./ShowWhenVisible";

const MainHeader = () => {
    return (
        <header className="header px-10 md:pl-20 lg:pl-40 text-4xl xs:text-6xl md:text-5xl lg:text-7xl">
            <ShowWhenVisible variants={visibleVariants.slideDown(50)} delay={.3}>
                <h1 className="mb-10">I'm <span className="fancy-text">Martin</span>,<br />Web developer.</h1>

                <ShowWhenVisible variants={visibleVariants.slideUp(50)} delay={1.1}>
                    <p className="font-normal text-xl lg:text-3xl">Front End / Back End</p>
                </ShowWhenVisible>
                
            </ShowWhenVisible>
        </header>
    )
}

export default MainHeader;