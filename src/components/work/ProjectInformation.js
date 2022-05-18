import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Breaker from "../Breaker";
import ImageSlider from "../ImageSlider"
import { ShowWhenVisible, visibleVariants } from "../ShowWhenVisible";

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

const ProjectHeader = ({ description, title, date, externalLink, githubLink, direction }) => {
    const hasLink = externalLink || githubLink;

    return (
        <header className={`card max-w-sm lg:max-w-full mb-auto ${direction === 1 ? 'justify-self-end lg:order-2' : ''}`}>
            <h3 className="text-2xl font-bold after:h-px after:inline-block text-center">{title}</h3>
            <h4 className="text-base text-center">{date}</h4>
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

const ProjectInformation = ({ path, images, title, date, skills = [], children, direction = 0, externalLink, githubLink }) => {
    return (
        <ShowWhenVisible
            variants={visibleVariants.slideUp(50)}
            className="mb-32 last-of-type:mb-0"
        >
            <article className={`project-info ${direction === 0 ? 'before:-left-3 sm:before:-left-5' : 'before:-right-3 sm:before:-right-5'}`}>
                <ProjectHeader
                    description={children}
                    title={title}
                    date={date}
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

export default ProjectInformation;