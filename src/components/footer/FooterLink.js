import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FooterLink = (icon, title, link) => {
    return (
        <a
            className="link flex justify-center items-center gap-2"
            href={link}
            target="_blank"
            rel="noreferrer"
        >
            <FontAwesomeIcon icon={icon} />
            {title}
        </a>
    )
}

const FooterGithubLink = () => FooterLink(faGithub, "github.com/Martiinii", "https://github.com/Martiinii/")
const FooterEmailLink = () => FooterLink(faEnvelope, "me.martiinii@gmail.com", "mailto:me.martiinii@gmail.com");

export {
    FooterGithubLink,
    FooterEmailLink,
}