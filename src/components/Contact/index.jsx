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
                <GithubLogo size={32} className={styles.GithubLogo} />
            </a>
        </div>
    )
}

export default Contact
