import { FirebaseSkillTag, JSSkillTag, NextSkillTag, ReactSkillTag, TailwindSkillTag } from "./SkillTag"

const TechGroup = ({title}) => {
    return (
        <article>
            <h3 className="text-center font-medium text-lg xs:text-xl whitespace-nowrap">{title}</h3>
            <hr className="border-neutral-500 my-3" />

            <div className="flex flex-col gap-3 w-fit mx-auto text-base sm:text-lg">
                <JSSkillTag />
                <TailwindSkillTag />
                <ReactSkillTag />
                <NextSkillTag />
                <FirebaseSkillTag />
            </div>
        </article>
    )
}

export default TechGroup