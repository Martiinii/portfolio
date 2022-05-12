import React from "react";
import Breaker from "../Breaker";
import ImageSlider from "../ImageSlider"
import { ShowWhenVisible, visibleVariants } from "../ShowWhenVisible";
import { CSSSkillTag, FigmaSkillTag, FramerMotionSkillTag, HTMLSkillTag, JSSkillTag, NextSkillTag, PHPSkillTag, SQLSkillTag, TailwindSkillTag } from "../skills/SkillTag";

const ProjectHeader = ({ description, title, direction }) => {
    return (
        <header className={`card max-w-sm lg:max-w-full mb-auto ${direction === 1 ? 'justify-self-end lg:order-2' : ''}`}>
            <h3 className="text-xl font-bold after:h-px after:inline-block text-center">{title}</h3>
            <Breaker />
            <div className="w-full">{description}</div>
        </header>
    )
}

const ProjectCard = ({ path, images, skills }) => {
    return (
        <div className="card lg:col-span-2">
            <ImageSlider
                path={path}
                images={images}
            />
            <Breaker />
            <div className="flex flex-wrap gap-4 justify-center text-sm">
                {skills.map((skill, i) => {
                    return React.cloneElement(skill, { key: i })
                })}
            </div>
        </div>
    )
}

const ProjectInformation = ({ path, images, title, skills = [], children, direction = 0 }) => {
    return (
        <ShowWhenVisible
            variants={visibleVariants.slideUp(50)}
            className="mb-32 last-of-type:mb-0"
        >
            <article className={`project-info ${direction === 0 ? 'before:-left-3 sm:before:-left-5' : 'before:-right-3 sm:before:-right-5'}`}>
                <ProjectHeader
                    description={children}
                    title={title}
                    direction={direction}
                />

                <ProjectCard
                    path={path}
                    images={images}
                    skills={skills}
                />
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

const SMRNDZProject = () => {
    return (
        <ProjectInformation
            title="Smrekówka and Niedźwiedzia Chata"
            path="images/smrndz/"
            images={[
                "1.webp",
                "2.webp",
                "3.webp",
                "4.webp",
                "5.webp",
            ]}
            skills={[
                <HTMLSkillTag />,
                <CSSSkillTag />,
                <JSSkillTag />,
                <PHPSkillTag />,
                <SQLSkillTag />,
            ]}
            direction={1}
        >
            <p>Website with information about two houses for rent. Includes an easy-to-use booking system with administration panel to manage reservations.</p>
        </ProjectInformation>
    )
}

export { WOMProject, SMRNDZProject }