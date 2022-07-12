import Breaker from "../Breaker";
import { FooterEmailLink, FooterGithubLink } from "../footer/FooterLink";
import H2 from "../headers/H2";
import { ShowWhenVisible, visibleVariants } from "../ShowWhenVisible";
import { LoveSkillTag } from "../skills/SkillTag";

const Contact = () => {
    return (
        <footer className="bg-indigo-600 text-yellow-300 font-semibold dark:bg-indigo-900 dark:text-amber-300" id="contact">
            <article className="max-w-4xl mx-auto">
                <H2>Find me here:</H2>

                <ShowWhenVisible
                    className="card w-fit mx-auto text-sm xs:text-lg my-10 dark:bg-none dark:bg-black/30"
                    variants={visibleVariants.slideRight(100)}
                >
                    <FooterGithubLink />
                    <FooterEmailLink />
                </ShowWhenVisible>

                <Breaker color="border-yellow-300 dark:border-amber-300" className="my-5" />

                <ShowWhenVisible className="text-center">
                    <span className="flex gap-3 justify-center items-center mb-5">Made with<LoveSkillTag /></span>
                    <span className="text-sm">Designed by Marcin Gąsienica-Makowski | 2022</span>
                </ShowWhenVisible>

            </article>
        </footer>
    )
}

export default Contact;