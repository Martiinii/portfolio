import React from "react";
import Breaker from "../Breaker";
import ImageSlider from "../ImageSlider"
import { ShowWhenVisible, visibleVariants } from "../ShowWhenVisible";
import { FigmaSkillTag, FramerMotionSkillTag, JSSkillTag, NextSkillTag, TailwindSkillTag } from "../skills/SkillTag";

const ProjectInformation = ({ path, images, title, skills = [], children, direction = 0 }) => {
    return (
        <ShowWhenVisible
            variants={visibleVariants.slideUp(50)}
            className="mb-32"
        >
            <article className={`project-info ${direction === 0 ? 'items-start lg:flex-row' : 'items-end lg:items-start lg:flex-row-reverse'}`}>
                <header className="card max-w-xl flex-shrink-[2]">
                    <h3 className="text-xl font-bold after:h-px after:inline-block text-center">{title}</h3>
                    <Breaker />
                    <div className="w-full">{children}</div>
                </header>

                <div className="card">
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
        </ShowWhenVisible>
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
            <p>Web application for learning / revising words or concepts for exams. It doesn't require any account, data is stored in browser's local storage.</p>
            <p>Built in support for multiple lists.</p>
        </ProjectInformation>
    )
}

export { WOMProject }