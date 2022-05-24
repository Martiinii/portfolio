import MainHeader from "../headers/MainHeader";
import ScrollDownArrow from "../headers/ScrollDownArrow";

const Hero = () => {
    return (
        <section className="bg-primary min-h-screen pt-40 flex flex-col gap-20 justify-between">
            <MainHeader />
            <ScrollDownArrow />
        </section>
    )
}

export default Hero;