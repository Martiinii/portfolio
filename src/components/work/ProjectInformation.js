import React from "react";
import Breaker from "../Breaker";
import ImageSlider from "../ImageSlider"
import { FigmaSkillTag, FramerMotionSkillTag, JSSkillTag, NextSkillTag, TailwindSkillTag } from "../skills/SkillTag";

const ProjectInformation = ({ path, images, title, skills = [], children, direction = 0 }) => {
    return (
        <article className={`flex gap-5 flex-col w-fit mx-auto ${direction === 0 ? 'items-start lg:flex-row' : 'items-end lg:items-start lg:flex-row-reverse'}`}>
            <header className="flex flex-col gap-5 bg-white p-5 rounded-xl shadow-lg max-w-xl flex-shrink-[2]">
                <h3 className="text-xl font-bold">{title}</h3>
                <div className="w-full">{children}</div>
            </header>

            <div className="flex flex-col bg-white rounded-xl gap-5 p-5">
                <ImageSlider
                    path={path}
                    images={images}
                    className="max-w-3xl"
                />
                <Breaker />
                <div className="flex flex-wrap gap-4 justify-center text-sm">
                    {skills.map((skill, i) => {
                        return React.cloneElement(skill, { key: i })
                    })}
                </div>
            </div>
        </article>
    )
}

const WOMProject = () => {
    return (
        <ProjectInformation
            title="Word-o-mat"
            path="images/wom/"
            images={[
                "1.webp",
                "2.webp",
                "3.webp",
                "4.webp",
                "5.webp",
            ]}
            skills={[
                <NextSkillTag />,
                <TailwindSkillTag />,
                <FramerMotionSkillTag />,
                <JSSkillTag />,
                <FigmaSkillTag />,
            ]}
        >
            Web application for learning / revising words for exams. It doesn't require any account, data is stored in browser's local storage.
        </ProjectInformation>
    )
}

export { WOMProject }