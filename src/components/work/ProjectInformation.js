import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Breaker from "../Breaker";
import ImageSlider from "../ImageSlider"
import { ShowWhenVisible, visibleVariants } from "../ShowWhenVisible";
import { CSSSkillTag, ElectronSkillTag, FigmaSkillTag, FramerMotionSkillTag, HTMLSkillTag, JSSkillTag, NextSkillTag, PHPSkillTag, ReactSkillTag, SQLSkillTag, TailwindSkillTag } from "../skills/SkillTag";

const ProjectLink = ({ link = null, icon, label }) => {
    if (link === null) return null;

    return (
        <a
            aria-label={label}
            href={link}
            target="_blank"
            rel="noreferrer"
            className="link text-xl"
        >
            <FontAwesomeIcon icon={icon} />
        </a>
    );
}

const ProjectHeader = ({ description, title, externalLink, githubLink, direction }) => {
    const hasLink = externalLink || githubLink;

    return (
        <header className={`card max-w-sm lg:max-w-full mb-auto ${direction === 1 ? 'justify-self-end lg:order-2' : ''}`}>
            <h3 className="text-2xl font-bold after:h-px after:inline-block text-center">{title}</h3>
            <Breaker />
            <div className="w-full">{description}</div>

            {hasLink && <>
                <Breaker />
                <div className="flex flex-wrap gap-3">
                    <ProjectLink
                        link={externalLink}
                        icon={faArrowUpRightFromSquare}
                        label="External link"
                    />
                    <ProjectLink
                        link={githubLink}
                        icon={faGithub}
                        label="Link to github repositorium"
                    />
                </div>
            </>}


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

const ProjectInformation = ({ path, images, title, skills = [], children, direction = 0, externalLink, githubLink }) => {
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
                    externalLink={externalLink}
                    githubLink={githubLink}
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

const WOMProject = ({dir = 0}) => {
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
            externalLink="https://wom.martiinii.dev"
            githubLink="https://github.com/Martiinii/word-o-mat"

            direction={dir}
        >
            <p>Web application for learning / revising words or concepts for exams. It doesn't require any account, data is stored in browser's local storage.</p>
            <p>Built in support for multiple lists.</p>
        </ProjectInformation>
    )
}

const SMRNDZProject = ({dir = 0}) => {
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
            direction={dir}
        >
            <p>Website with information about two houses for rent. Includes an easy-to-use booking system with administration panel to manage reservations.</p>
        </ProjectInformation>
    )
}

const TailwindColorsProject = ({dir = 0}) => {
    return (
        <ProjectInformation
            title="Tailwind CSS Colors"
            path="images/tailwindcolors/"
            images={[
                "1.webp"
            ]}
            skills={[
                <ReactSkillTag />,
                <TailwindSkillTag />
            ]}
            externalLink="https://martiinii.github.io/tailwindcolors/"
            githubLink="https://github.com/Martiinii/tailwindcolors"

            direction={dir}
        >
            <p>Website that displays every color from Tailwind CSS. Clicking on a color copies its value. Built-in text to preview your color combo.</p>
        </ProjectInformation>
    )
}

const ClimbingWallProject = ({dir = 0}) => {
    return (
        <ProjectInformation
            title="Software for managing people at climbing wall"
            path="images/mf/"
            images={[
                "1.webp",
                "2.webp",
                "3.webp",
                "4.webp",
                "5.webp",
                "6.webp",
            ]}
            skills={[
                <HTMLSkillTag />,
                <CSSSkillTag />,
                <JSSkillTag />,
                <SQLSkillTag />,
                <ElectronSkillTag />
            ]}
            
            direction={dir}
        >
            <p>Electron based app for managing people. Build-in keyboard shortcuts to increase work speed.</p>
        </ProjectInformation>
    )
}

export { WOMProject, SMRNDZProject, TailwindColorsProject, ClimbingWallProject }