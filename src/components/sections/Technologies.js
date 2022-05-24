import Breaker from "../Breaker";
import H2 from "../headers/H2";
import { ShowWhenVisible } from "../ShowWhenVisible";
import LegendItem from "../skills/LegendItem";
import TechGroups from "../skills/TechGroups";

const Technologies = () => {
    return (
        <section className="bg-primary min-h-screen" id="skills">
            <article className="max-w-4xl mx-auto">
                <H2>Technologies I use</H2>

                <ShowWhenVisible delay={.6} className="grid gap-5 justify-center items-center max-w-4xl mx-auto">
                    <TechGroups />
                    <Breaker className="mt-10" />

                    <div>
                        <LegendItem title="Good knowledge" level={1} />
                        <LegendItem title="Basic knowledge" level={2} />
                        <LegendItem title="Still learning" level={3} />
                    </div>
                </ShowWhenVisible>
            </article>
        </section>
    )
}

export default Technologies;