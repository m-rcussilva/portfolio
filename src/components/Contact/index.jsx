import { GithubLogo } from "phosphor-react"
import styles from "./Contact.module.css"

function Contact() {
    return (
        <div className={styles.ContactContainer}>
            <a
                href="https://github.com/m-rcussilva"
                target="_blank"
                className={styles.socialMediaIcons}
                title="Github"
            >
                <GithubLogo size={32} color="#a8fe39" />
            </a>
        </div>
    )
}

export default Contact
